package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"golang.org/x/crypto/bcrypt"
)

func SendConfirmationEmail(userEmail string) {
	// Налаштування

	from := os.Getenv("MAIL_SENDER_USER")
	password := os.Getenv("MAIL_SENDER_PASSWORD")

	// Дані листа
	to := []string{userEmail}

	subject := "Registration confirmation"
	body := "You have successfully registered on our site"
	message := subject + "\n" + body
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	// Налаштування SMTP
	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Відправка листа
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, []byte(message))
	if err != nil {
		fmt.Printf("Error sending email: %s", err)
		return
	}

	fmt.Printf("Email sent successfully!")
}

func atlasConnect() (*mongo.Client, context.Context) {
	connStr := fmt.Sprintf("mongodb+srv://%s:%s@cluster0.zu5x1iv.mongodb.net/?retryWrites=true&w=majority",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"))

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(connStr))
	if err != nil {
		panic(err)
	}

	// Перевірка з'єднання
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}

	return client, context.TODO()
}
func checkUser(client *mongo.Client, ctx context.Context, email, password string) {
	collection := client.Database("mydb").Collection("users")
	filter := bson.M{"email": email}
	var result bson.M

	err := collection.FindOne(ctx, filter).Decode(&result)

	if err == mongo.ErrNoDocuments {
		// Створити нового користувача
		hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		insertResult, err := collection.InsertOne(ctx, bson.D{
			{Key: "email", Value: email},
			{Key: "password", Value: string(hashedPassword)},
		})
		SendConfirmationEmail(email)

		if err != nil {
			panic(err)
		}

		fmt.Printf("New user %v created successfully", insertResult.InsertedID)
	} else {
		hashedPassword := result["password"].(string)
		// Перевірити пароль
		if err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password)); err != nil {
			fmt.Println("Invalid password")
		} else {
			fmt.Println("Login successful")
		}
	}
}

func CreateSnippet(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		http.Error(w, "Method Not Allowed", 405)
		return
	}
	var data map[string]string
	json.NewDecoder(r.Body).Decode(&data)
	email := data["email"]
	// Отримати логін

	// Отримати пароль
	password := data["password"]
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASSWORD")

	fmt.Println(dbUser)
	fmt.Println(dbPass)
	fmt.Println(dbUser)
	println(password, email)
	client, ctx := atlasConnect()

	checkUser(client, ctx, email, password)

}
