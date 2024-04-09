package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	fmt.Fprintln(w, "Hello from hello page!")
}

func main() {
	mux := http.NewServeMux()

	issue := godotenv.Load()
	if issue != nil {
		log.Fatal("Error loading .env file")
	}
	mux.HandleFunc("/register", registerHandler)
	mux.HandleFunc("/login", loginHandler)
	mux.HandleFunc("/api/hello", helloHandler)
	// mux.HandleFunc("/courses", courseCreateHandler)
	mux.HandleFunc("/courses", coursesGetHandler)
	mux.HandleFunc("/courses/", courseGetHandler)
	mux.HandleFunc("/courses/feedback", feedbackCreateHandler)
	mux.HandleFunc("/courses/feedbacks", feedbacksGetHandler)

	log.Printf("Starting server on :%v", os.Getenv("SERVER"))
	err := http.ListenAndServe(":"+os.Getenv("SERVER"), mux)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
