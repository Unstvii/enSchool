package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func createScheduleData(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	slots := []Slot{
		{Time: "9:00 - 10:00", Available: true},
		{Time: "10:00 - 11:00", Available: false},
		{Time: "11:00 - 12:00", Available: true},
		{Time: "12:00 - 13:00", Available: true},
		{Time: "13:00 - 14:00", Available: true},
		{Time: "14:00 - 15:00", Available: true},
	}
	requestedDate := r.URL.Query().Get("date")
	scheduleDay := ScheduleDay{
		Date:  requestedDate,
		Slots: slots,
	}
	atlasConnect("LESSONS_COLLECTION")
	ctx, cancel := context.WithCancel(context.Background())

	defer cancel()
	_, err := collection.InsertOne(ctx, scheduleDay)

	if err != nil {
		http.Error(w, "Error inserting user into database", http.StatusInternalServerError)
		return
	}
	defer w.WriteHeader(http.StatusOK)
}

func lessonGetHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	requestedDate := r.URL.Query().Get("date")
	if requestedDate == "" {
		http.Error(w, "Missing date parameter", http.StatusBadRequest)
		return
	}
	log.Printf("Requested date: %s", requestedDate)

	filter := bson.D{{"date", requestedDate}}

	var scheduleDay ScheduleDay
	atlasConnect("LESSONS_COLLECTION")
	err := collection.FindOne(context.Background(), filter).Decode(&scheduleDay)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Printf("No schedule found for date: %s", requestedDate)
			http.Error(w, "No schedule found for the given date", http.StatusNotFound)
			return
		}
		log.Printf("Error finding schedule: %v", err)
		http.Error(w, "Error finding schedule", http.StatusInternalServerError)
		return
	}

	scheduleJSON, err := json.Marshal(scheduleDay)
	if err != nil {
		log.Printf("Error serializing object: %v", err)
		http.Error(w, "Error serializing object", http.StatusInternalServerError)
		return
	}

	w.Write(scheduleJSON)
}

func bookLessonHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	requestedDate := r.URL.Query().Get("date")
	slotTime := r.URL.Query().Get("time")

	if requestedDate == "" || slotTime == "" {
		http.Error(w, "Missing date or time parameter", http.StatusBadRequest)
		return
	}

	log.Printf("Requested date: %s, Slot time: %s", requestedDate, slotTime)

	filter := bson.D{
		{"date", requestedDate},
		{"slots", bson.D{
			{"$elemMatch", bson.D{
				{"time", bson.D{
					{"$regex", fmt.Sprintf("^%s$", regexp.QuoteMeta(slotTime))},
				}},
				{"available", true},
			}},
		}},
	}

	var scheduleDay ScheduleDay
	atlasConnect("LESSONS_COLLECTION")
	err := collection.FindOne(context.Background(), filter).Decode(&scheduleDay)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Printf("No document found for date: %s, time: %s", requestedDate, slotTime)
			http.Error(w, "No document found for the given date and time", http.StatusNotFound)
			return
		}
		log.Printf("Error finding schedule: %v", err)
		http.Error(w, "Error finding schedule", http.StatusInternalServerError)
		return
	}

	update := bson.M{
		"$set": bson.M{
			"slots.$.available": false,
		},
	}

	_, err = collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Printf("Error in update lesson: %v", err)
		http.Error(w, "Error in update lesson", http.StatusInternalServerError)
		return
	}

	scheduleJSON, err := json.Marshal(scheduleDay)
	if err != nil {
		log.Printf("Error marshaling JSON: %v", err)
		http.Error(w, "Error marshaling JSON", http.StatusInternalServerError)
		return
	}

	w.Write(scheduleJSON)
}
