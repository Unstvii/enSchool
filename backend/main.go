package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	mux := http.NewServeMux()

	issue := godotenv.Load()
	if issue != nil {
		log.Fatal("Error loading .env file")
	}
	mux.HandleFunc("/auth", authHandler)
	mux.HandleFunc("/login", loginHandler)
	log.Printf("Starting server on :%v", os.Getenv("SERVER"))
	err := http.ListenAndServe(":"+os.Getenv("SERVER"), mux)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
