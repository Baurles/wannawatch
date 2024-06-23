package Films

import (
	"api/types"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)


func GetFilms(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT * FROM films")

		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		films := []types.Film{}
		for rows.Next() {
			var f types.Film

			if err := rows.Scan(&f.Id, &f.Name, &f.Description,&f.ImgURL,&f.Rate,&f.Country,&f.Year); err != nil {
				log.Fatal(err)
			}
			films = append(films, f)
		}

		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(films)
	}
}

func CreateFilm(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		var f types.Film
		json.NewDecoder(r.Body).Decode(&f)
		
		err :=db.QueryRow("INSERT INTO films (name,description,imgURL,rate,country,year) VALUES ($1, $2,$3,$4,$5,$6) RETURNING id",f.Name,f.Description,f.ImgURL,f.Rate,f.Country,f.Year).Scan(&f.Id)
		if err !=nil{
			log.Fatal(err)
		}
		json.NewEncoder(w).Encode(f)
	}
}

func GetFilm(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		vars := mux.Vars(r)
		id := vars["id"]

		var f types.Film
		
		err := db.QueryRow("SELECT * FROM films WHERE id = $1",id).Scan(&f.Id,&f.Name,&f.Description,&f.ImgURL,&f.Rate,&f.Country,&f.Year)
		if err !=nil{
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode(f)
	}
}
func GetFilmsRange(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		rangefrom := vars["rangefrom"]
		rangeto := vars["rangeto"]
		rows, err := db.Query("SELECT * FROM films WHERE id BETWEEN $1 AND $2",rangefrom,rangeto)

		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		films := []types.Film{}
		for rows.Next() {
			var f types.Film

			if err := rows.Scan(&f.Id, &f.Name, &f.Description,&f.ImgURL,&f.Rate,&f.Country,&f.Year); err != nil {
				log.Fatal(err)
			}
			films = append(films, f)
		}

		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(films)
	}
}

func UpdateFilm(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter,r *http.Request){
		var f types.Film
		json.NewDecoder(r.Body).Decode(&f)

		vars :=mux.Vars(r)
		id :=vars["id"]

		_,err := db.Exec("UPDATE films SET name = $1, description = $2 imgURL = $3 rate = $4 country = $5 year = $6 WHERE id = $7",f.Name,f.Description,f.ImgURL,f.Rate,f.Country,f.Year,f.Id)
		
		if err !=nil{
			log.Fatal(err)
		}
		
		var updateFilm types.Film
		err = db.QueryRow("SELECT id, name, description, imgURL, rate, country, year FROM films WHERE id = $1", id).Scan(&updateFilm.Id,&updateFilm.Name,&updateFilm.Description,&updateFilm.ImgURL,&updateFilm.Rate,&updateFilm.Country,&updateFilm.Year)
		
		if err !=nil{
			log.Fatal(err)
		}
		
		json.NewEncoder(w).Encode(updateFilm)
	}
}

func DeleteFilm(db *sql.DB) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		vars := mux.Vars(r)
		id := vars["id"]

		var f types.Film
		err :=db.QueryRow("SELECT * FROM films WHERE id = $1", id).Scan(&f.Id, &f.Name, &f.Description,&f.ImgURL,&f.Rate,&f.Country,&f.Year)

		if err != nil{
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode("Film Deleted")
	}
}
