package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func courseCreateHandler(w http.ResponseWriter, r *http.Request) {
	var course Course

	if err := json.NewDecoder(r.Body).Decode(&course); err != nil {
		fmt.Println("Error in unpackign json", err)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	fmt.Fprintln(w, "Hello from create course page !")
	atlasConnect("COURSES_COLLECTION")
	ctx, cancel := context.WithCancel(context.Background())

	defer cancel()
	_, err := collection.InsertOne(ctx, course)

	if err != nil {
		http.Error(w, "Error inserting user into database", http.StatusInternalServerError)
		return
	}
}

func coursesGetHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	category := r.URL.Query().Get("category")
	if category == "" {
		http.Error(w, "Категорія не вказана", http.StatusBadRequest)
		return
	}

	atlasConnect("COURSES_COLLECTION")
	ctx, cancel := context.WithCancel(context.Background())

	defer cancel()
	var course []Course
	cur, err := collection.Find(ctx, bson.M{"category": category})
	if err != nil {
		http.Error(w, "Помилка при пошуку в базі даних", http.StatusInternalServerError)
		return
	}
	defer cur.Close(ctx)
	if err = cur.All(ctx, &course); err != nil {
		http.Error(w, "Помилка при декодуванні даних", http.StatusInternalServerError)
		return
	}
	courseJSON, err := json.Marshal(course)
	if err != nil {
		http.Error(w, "Помилка при серіалізації об'єкта", http.StatusInternalServerError)
		return
	}
	w.Write(courseJSON)
}
func courseGetHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	parts := strings.Split(path, "/")
	if len(parts) != 3 {
		http.Error(w, "Неправильний шлях", http.StatusBadRequest)
		return
	}
	courseID, err := primitive.ObjectIDFromHex(parts[2])
	if err != nil {
		http.Error(w, "Неправильний ID курсу", http.StatusBadRequest)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	filter := bson.D{{"_id", courseID}}
	var course Course
	atlasConnect("COURSES_COLLECTION")
	err = collection.FindOne(context.Background(), filter).Decode(&course)
	if err != nil {
		http.Error(w, "Помилка при пошуку курсу", http.StatusInternalServerError)
		return
	}

	courseJSON, err := json.Marshal(course)
	if err != nil {
		http.Error(w, "Помилка при серіалізації об'єкта", http.StatusInternalServerError)
		return
	}
	w.Write(courseJSON)
}
