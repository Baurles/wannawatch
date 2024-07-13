package Filters

import (
	"api/handlers/UrlDecoder"
	"api/types"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func GetFilters(db *sql.DB, variants string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT * FROM "+ variants)

		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		filters := []types.Filter{}
		for rows.Next() {
			var f types.Filter

			if err := rows.Scan(&f.Id, &f.Name); err != nil {
				log.Fatal(err)
			}
			filters= append(filters, f)
		}

		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(filters)
	}
}

func CreateFilters(db *sql.DB, variants string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		var f types.Filter
		json.NewDecoder(r.Body).Decode(&f)
		
		err :=db.QueryRow("INSERT INTO "+variants+" (name) VALUES ($1) RETURNING id",f.Name).Scan(&f.Id)
		if err !=nil{
			log.Fatal(err)
		}
		json.NewEncoder(w).Encode(f)
	}
}

func UpdateFilters(db *sql.DB,variants string) http.HandlerFunc {
	return func(w http.ResponseWriter,r *http.Request){
		var f types.Filter
		json.NewDecoder(r.Body).Decode(&f)

		vars :=mux.Vars(r)
		id :=vars["id"]

		_,err := db.Exec("UPDATE "+variants+" SET name = $1 WHERE id = $2",f.Name,f.Id)
		
		if err !=nil{
			log.Fatal(err)
		}
		
		var updateFilter types.Filter
		err = db.QueryRow("SELECT id, name FROM "+variants+" WHERE id = $1", id).Scan(&updateFilter.Id,&updateFilter.Name)
		
		if err !=nil{
			log.Fatal(err)
		}
		
		json.NewEncoder(w).Encode(updateFilter)
	}
}

func DeleteFilters(db *sql.DB,variants string) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		vars := mux.Vars(r)
		id := vars["id"]

		var f types.Filter
		err :=db.QueryRow("SELECT * FROM "+variants+" WHERE id = $1", id).Scan(&f.Id, &f.Name)

		if err != nil{
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode(variants+" deleted")
	}
}

func GetCurrentFilter(db *sql.DB,selectType string) http.HandlerFunc{
	return func(w http.ResponseWriter, r *http.Request){
		vars :=mux.Vars(r)
		current := vars[selectType]
		decoded :=UrlDecoder.UrlDecoder(current)
	
		rows, err := db.Query("SELECT * FROM films WHERE "+selectType+" = $1",decoded)

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