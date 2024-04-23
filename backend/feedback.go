package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	// "strconv"
	"go.mongodb.org/mongo-driver/bson"
)

func feedbackCreateHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var feedback Feedback

	if err := json.NewDecoder(r.Body).Decode(&feedback); err != nil {
		fmt.Println("Error in unpackign json", err)
		return
	}

	atlasConnect("FEEDBACK_COLLECTION")
	ctx, cancel := context.WithCancel(context.Background())

	defer cancel()
	_, err := collection.InsertOne(ctx, feedback)

	if err != nil {
		http.Error(w, "Error inserting user into database", http.StatusInternalServerError)
		return
	}
}
// type Feedback struct {
// 	Nickname string `json:"nickname"`
// 	CourseID string `json:"courseid"`
// 	 string `json:"feedback"`
// 	Rating   int16  `json:"rating"`
// 	// Date     string `json:"date"`
// }



func feedbacksGetHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    courseID := r.URL.Query().Get("courseID")
    if courseID == "" {
        http.Error(w, "Категорія не вказана", http.StatusBadRequest)
        return
    }
    atlasConnect("FEEDBACK_COLLECTION")
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    // Агрегація для обчислення середнього рейтингу та отримання відгуків
    ratingPipeline := []bson.M{
        {"$match": bson.M{"courseid": courseID}},
        {"$group": bson.M{
            "_id": nil,
            "reviews": bson.M{"$push": bson.M{"nickname": "$nickname", "review": "$review", "rating": "$rating"}},
            "avgRating": bson.M{"$avg": "$rating"},
        }},
    }

    // Агрегація для підрахунку кількості оцінок для кожного значення рейтингу
    countPipeline := []bson.M{
        {"$match": bson.M{"courseid": courseID}},
        {"$group": bson.M{
            "_id": "$rating",
            "count": bson.M{"$sum": 1},
        }},
    }

    ratingCur, err := collection.Aggregate(ctx, ratingPipeline)
    if err != nil {
        http.Error(w, "Помилка при агрегації даних (рейтинг)", http.StatusInternalServerError)
        return
    }
    defer ratingCur.Close(ctx)

    countCur, err := collection.Aggregate(ctx, countPipeline)
    if err != nil {
        http.Error(w, "Помилка при агрегації даних (підрахунок)", http.StatusInternalServerError)
        return
    }
    defer countCur.Close(ctx)

    var ratingResult []bson.M
    if err = ratingCur.All(ctx, &ratingResult); err != nil {
        http.Error(w, "Помилка при декодуванні даних (рейтинг)", http.StatusInternalServerError)
        return
    }

    var countResult []bson.M
    if err = countCur.All(ctx, &countResult); err != nil {
        http.Error(w, "Помилка при декодуванні даних (підрахунок)", http.StatusInternalServerError)
        return
    }

    // Створення об'єкта result
    result := make(map[string]interface{})
    result["reviews"] = ratingResult[0]["reviews"]
    result["rating"] = ratingResult[0]["avgRating"]
    ratingCounts := make([]map[string]int, 5)
    for _, count := range countResult {
        rating := int(count["_id"].(int32))
        ratingCounts[rating-1] = map[string]int{"rating": rating, "count": int(count["count"].(int32))}
    }
    result["rating_counts"] = ratingCounts

    courseJSON, err := json.Marshal(result)
    if err != nil {
        http.Error(w, "Помилка при серіалізації об'єкта", http.StatusInternalServerError)
        return
    }
    w.Write(courseJSON)
}