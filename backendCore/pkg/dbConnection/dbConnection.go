package dbConnection

import (
	"database/sql"
	"log"
)

func Connect(db *sql.DB, err error, dbType string) {	
	if err !=nil{
		log.Fatal(err)
	}

	if dbType == "auth"{
		_,err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, telegram TEXT)")
		if err !=nil{
			log.Fatal(err)
		}
	}

	if dbType == "films"{
		_,err = db.Exec("CREATE TABLE IF NOT EXISTS films (id SERIAL PRIMARY KEY, name TEXT, description TEXT, imgUrl TEXT, rate TEXT, country TEXT,year TEXT)")
		if err !=nil{
			log.Fatal(err)
		}
		_,err = db.Exec("CREATE TABLE IF NOT EXISTS category (id SERIAL PRIMARY KEY, category TEXT)")
		if err !=nil{
			log.Fatal(err)
		}
		
		_,err = db.Exec("CREATE TABLE IF NOT EXISTS country (id SERIAL PRIMARY KEY, country TEXT)")
		if err !=nil{
			log.Fatal(err)
		}
		_,err = db.Exec("CREATE TABLE IF NOT EXISTS years (id SERIAL PRIMARY KEY, years TEXT)")
		if err !=nil{
			log.Fatal(err)
		}

	}
	
	
	// if dbType == "ai"{
	// 	_,err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, telegram TEXT)")
	// }
	

}