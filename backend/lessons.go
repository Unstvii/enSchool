
package main

import (
	"context"
	"net/http"
	"encoding/json"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
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

    scheduleDay := ScheduleDay{
        Date:  "2024-05-04",
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