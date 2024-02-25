package main

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Nickname string `json:"nickname"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Course struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Title       string             `json:"title"`
	Category    string             `json:"category"`
	Description string             `json:"description"`
	Lessons     string             `json:"lessons"`
	Image       string             `json:"image"`
	Price       string             `json:"price"`
	OldPrice    string             `json:"oldPrice"`
	Author      string             `json:"author"`
	AuthorIcon  string             `json:"authorIcon"`
}
