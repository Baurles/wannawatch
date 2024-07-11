package main

import (
	"api/handlers/CORS"
	"api/handlers/Films"
	"api/handlers/Filters"
	"api/handlers/Middleware"
	"database/sql"
	"os"

	"api/pkg/dbConnection"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)



func main(){
	filmsDB,filmsDBerr:= sql.Open("postgres",os.Getenv("DATABASE_URL_FILMS"))
	usersDB,usersDBerr := sql.Open("postgres",os.Getenv("DATABASE_URL_AUTH"))
	dbConnection.Connect(filmsDB,filmsDBerr,"films")
	dbConnection.Connect(usersDB,usersDBerr,"auth")
	defer filmsDB.Close()
	defer usersDB.Close()
	
	router :=mux.NewRouter()
	router.HandleFunc("/api/films", Films.GetFilms(filmsDB)).Methods("GET")
	router.HandleFunc("/api/films/list/{rangefrom}_{rangeto}", Films.GetFilmsRange(filmsDB)).Methods("GET")
	router.HandleFunc("/api/films", Films.CreateFilm(filmsDB)).Methods("POST")
	router.HandleFunc("/api/films/{id}", Films.GetFilm(filmsDB)).Methods("GET")
	router.HandleFunc("/api/films/{id}", Films.UpdateFilm(filmsDB)).Methods("PUT")
	router.HandleFunc("/api/films/{id}", Films.DeleteFilm(filmsDB)).Methods("DELETE")

	router.HandleFunc("/api/films/filters/category",Filters.GetFilters(filmsDB,"category")).Methods("GET")
	router.HandleFunc("/api/films/filters/category",Filters.CreateFilters(filmsDB,"category")).Methods("POST")
	router.HandleFunc("/api/films/filters/category",Filters.UpdateFilters(filmsDB,"category")).Methods("PUT")
	router.HandleFunc("/api/films/filters/category",Filters.DeleteFilters(filmsDB,"category")).Methods("DELETE")

	router.HandleFunc("/api/films/filters/country",Filters.GetFilters(filmsDB,"country")).Methods("GET")
	router.HandleFunc("/api/films/filters/country",Filters.CreateFilters(filmsDB,"country")).Methods("POST")
	router.HandleFunc("/api/films/filters/country",Filters.UpdateFilters(filmsDB,"country")).Methods("PUT")
	router.HandleFunc("/api/films/filters/country",Filters.DeleteFilters(filmsDB,"country")).Methods("DELETE")

	router.HandleFunc("/api/films/filters/years",Filters.GetFilters(filmsDB,"years")).Methods("GET")
	router.HandleFunc("/api/films/filters/years",Filters.CreateFilters(filmsDB,"years")).Methods("POST")
	router.HandleFunc("/api/films/filters/years",Filters.UpdateFilters(filmsDB,"years")).Methods("PUT")
	router.HandleFunc("/api/films/filters/years",Filters.DeleteFilters(filmsDB,"years")).Methods("DELETE")

	enhancedRouter :=CORS.EnableCORS(Middleware.JsonContentTypeMiddleware(router))
	log.Fatal(http.ListenAndServe(":8000",enhancedRouter))
}
	

// func getUsers(db *sql.DB) http.HandlerFunc{
// 	return func(w http.ResponseWriter, r *http.Request){
// 		rows,err := db.Query("SELECT * FROM users")

// 		if err !=nil {
// 			log.Fatal(err)
// 		}
// 		defer rows.Close()

// 		users := []User{}
// 		for rows.Next(){
// 			var u User

// 			if err :=rows.Scan(&u.Id,&u.Name,&u.Telegram); err !=nil{
// 				log.Fatal(err)
// 			}
// 			users = append(users,u)
// 		}

// 		if err :=rows.Err(); err !=nil{
// 			log.Fatal(err)
// 		}

// 		json.NewEncoder(w).Encode(users)
// 	}
// }

// func getUser(db *sql.DB) http.HandlerFunc{
// 	return func(w http.ResponseWriter, r *http.Request){
// 		vars := mux.Vars(r)
// 		id := vars["id"]

// 		var u User
		
// 		err := db.QueryRow("SELECT * FROM users WHERE id = $1",id).Scan(&u.Id,&u.Name,&u.Telegram)
// 		if err !=nil{
// 			w.WriteHeader(http.StatusNotFound)
// 			return
// 		}

// 		json.NewEncoder(w).Encode(u)
// 	}
// }

// func createUser(db *sql.DB) http.HandlerFunc{
// 	return func(w http.ResponseWriter, r *http.Request){
// 		var u User
// 		json.NewDecoder(r.Body).Decode(&u)

// 		err :=db.QueryRow("INSERT INTO users (name,telegram) VALUES ($1, $2) RETURNING id",u.Name,u.Telegram).Scan(&u.Id)
// 		if err !=nil{
// 			log.Fatal(err)
// 		}
// 		json.NewEncoder(w).Encode(u)
// 	}
// }

// func updateUser(db *sql.DB) http.HandlerFunc{
// 	return func(w http.ResponseWriter,r *http.Request){
// 		var u User
// 		json.NewDecoder(r.Body).Decode(&u)

// 		vars :=mux.Vars(r)
// 		id :=vars["id"]

// 		_,err := db.Exec("UPDATE users SET name = $1, telegram = $2 WHERE id = $3",u.Name,u.Telegram,u.Id)
// 		if err !=nil{
// 			log.Fatal(err)
// 		}

// 		var updateUser User
// 		err = db.QueryRow("SELECT id, name, telegram FROM users WHERE id = $1", id).Scan(&updateUser.Id,&updateUser.Name,&updateUser.Telegram)
// 		if err !=nil{
// 			log.Fatal(err)
// 		}

// 		json.NewEncoder(w).Encode(updateUser)
// 	}
// }

// func deleteUser(db *sql.DB) http.HandlerFunc{
// 	return func(w http.ResponseWriter, r *http.Request){
// 		vars := mux.Vars(r)
// 		id := vars["id"]

// 		var u User
// 		err :=db.QueryRow("SELECT * FROM users WHERE id = $1",id).Scan(&u.Id, &u.Name, &u.Telegram)

// 		if err != nil{
// 			w.WriteHeader(http.StatusNotFound)
// 			return
// 		}

// 		json.NewEncoder(w).Encode("User Deleted")
// 	}
// }