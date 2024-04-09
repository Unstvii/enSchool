package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

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

	var feedbacks []Feedback
	cur, err := collection.Find(ctx, bson.M{"courseid": courseID})
	if err != nil {
		http.Error(w, "Помилка при пошуку в базі даних", http.StatusInternalServerError)
		return
	}
	defer cur.Close(ctx)

	if err = cur.All(ctx, &feedbacks); err != nil {
		http.Error(w, "Помилка при декодуванні даних", http.StatusInternalServerError)
		return
	}

	courseJSON, err := json.Marshal(feedbacks)
	if err != nil {
		http.Error(w, "Помилка при серіалізації об'єкта", http.StatusInternalServerError)
		return
	}

	w.Write(courseJSON)
}
