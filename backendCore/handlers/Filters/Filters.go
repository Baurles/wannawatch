package Filters

import (
	"api/types"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
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