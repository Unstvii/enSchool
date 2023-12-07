package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
)

var collection *mongo.Collection

func generateToken(user User) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	return token.SignedString([]byte(os.Getenv("SECRET")))
}

func SendConfirmationEmail(w http.ResponseWriter, userEmail string) {
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
		http.Error(w, "An error occurred when sending the letter", http.StatusInternalServerError)
		return
	}

	fmt.Fprintln(w, "Email send successfully")
}

func atlasConnect() {
	uri := fmt.Sprintf("mongodb+srv://%s:%s@cluster0.zu5x1iv.mongodb.net/?retryWrites=true&w=majority",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"))
	clientOptions := options.Client().ApplyURI(uri)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database(os.Getenv("DATABASE")).Collection(os.Getenv("USER_COLLECTION"))
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	atlasConnect()

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}
	user.Password = string(hashedPassword)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	err = checkUserExists(ctx, &user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	_, err = collection.InsertOne(ctx, user)
	if err != nil {
		http.Error(w, "Error inserting user into database", http.StatusInternalServerError)
		return
	}

	SendConfirmationEmail(w, user.Email)
	fmt.Fprintln(w, "User added to the database")
}

func checkUserExists(ctx context.Context, user *User) error {
	var result User
	err := collection.FindOne(ctx, bson.M{"email": user.Email}).Decode(&result)
	if err == nil {
		return fmt.Errorf("error: email already exists")
	}
	if err != mongo.ErrNoDocuments {
		return fmt.Errorf("error checking user in database")
	}

	err = collection.FindOne(ctx, bson.M{"nickname": user.Nickname}).Decode(&result)
	if err == nil {
		return fmt.Errorf("error: nickname already exists")
	}
	if err != mongo.ErrNoDocuments {
		return fmt.Errorf("error checking nickname in database")
	}

	return nil
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	atlasConnect()

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var result User
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	err = collection.FindOne(ctx, bson.M{"email": user.Email}).Decode(&result)
	if err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(user.Password))
	if err != nil {
		http.Error(w, "Invalid password", http.StatusUnauthorized)
		return
	}
	tokenString, err := generateToken(result)
	if err != nil {
		http.Error(w, "Error generating token", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: time.Now().Add(72 * time.Hour),
	})
	fmt.Fprintln(w, "User login successfully!")
}
