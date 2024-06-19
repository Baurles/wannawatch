package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type User struct{
	Id int `json:"id"`
	Name string `json:"name"`
	Telegram string `json:"telegram"`
}

func main(){
	db,err := sql.Open("postgres",os.Getenv("DATABASE_URL"))
	
	if err !=nil{
		log.Fatal(err)
	}
	defer db.Close()

	_,err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, telegram TEXT)")
	if err !=nil{
		log.Fatal(err)
	}

	router :=mux.NewRouter()
	router.HandleFunc("/api/auth/users", getUsers(db)).Methods("GET")
	router.HandleFunc("/api/auth/users", createUser(db)).Methods("POST")
	router.HandleFunc("/api/auth/users/{id}", getUser(db)).Methods("GET")
	router.HandleFunc("/api/auth/users/{id}", updateUser(db)).Methods("PUT")
	router.HandleFunc("/api/auth/users/{id}", deleteUser(db)).Methods("DELETE")

	enhancedRouter := enableCORS(jsonContentTypeMiddleware(router))

	log.Fatal(http.ListenAndServe(":8000",enhancedRouter))

	
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		w.Header().Set("Access-Control-Allow-Origin","*")
		w.Header().Set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS")
		w.Header().Set("Access-Control-Allow-Header","Content-Type")

		if r.Method == "OPTIONS"{
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w,r)
	})
}

func jsonContentTypeMiddleware(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type","application/json")
		next.ServeHTTP(w,r)
	})
}

func getUsers(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		rows,err := db.Query("SELECT * FROM users")

		if err !=nil {
			log.Fatal(err)
		}
		defer rows.Close()

		users := []User{}
		for rows.Next(){
			var u User

			if err :=rows.Scan(&u.Id,&u.Name,&u.Telegram); err !=nil{
				log.Fatal(err)
			}
			users = append(users,u)
		}

		if err :=rows.Err(); err !=nil{
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(users)
	}
}

func getUser(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		vars := mux.Vars(r)
		id := vars["id"]

		var u User
		
		err := db.QueryRow("SELECT * FROM users WHERE id = $1",id).Scan(&u.Id,&u.Name,&u.Telegram)
		if err !=nil{
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode(u)
	}
}

func createUser(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		var u User
		json.NewDecoder(r.Body).Decode(&u)

		err :=db.QueryRow("INSERT INTO users (name,telegram) VALUES ($1, $2) RETURNING id",u.Name,u.Telegram).Scan(&u.Id)
		if err !=nil{
			log.Fatal(err)
		}
		json.NewEncoder(w).Encode(u)
	}
}

func updateUser(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter,r *http.Request){
		var u User
		json.NewDecoder(r.Body).Decode(&u)

		vars :=mux.Vars(r)
		id :=vars["id"]

		_,err := db.Exec("UPDATE users SET name = $1, telegram = $2 WHERE id = $3",u.Name,u.Telegram,u.Id)
		if err !=nil{
			log.Fatal(err)
		}

		var updateUser User
		err = db.QueryRow("SELECT id, name, telegram FROM users WHERE id = $1", id).Scan(&updateUser.Id,&updateUser.Name,&updateUser.Telegram)
		if err !=nil{
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(updateUser)
	}
}

func deleteUser(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		vars := mux.Vars(r)
		id := vars["id"]

		var u User
		err :=db.QueryRow("SELECT * FROM users WHERE id = $1",id).Scan(&u.Id, &u.Name, &u.Telegram)

		if err != nil{
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode("User Deleted")
	}
}