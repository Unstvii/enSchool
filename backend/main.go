package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
)

func main() {
	mux := http.NewServeMux()

	issue := godotenv.Load()
	if issue != nil {
		log.Fatal("Error loading .env file")
	}
	mux.HandleFunc("/auth", CreateSnippet)
	log.Println("Starting server on :4000")
	err := http.ListenAndServe(":4000", mux)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
