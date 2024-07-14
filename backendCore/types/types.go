package types

type User struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Telegram string `json:"telegram"`
}

type Film struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	ImgURL      string `json:"imgURL`
	Rate        string `json:"rate"`
	Country     string `json:"country"`
	Year        string `json:"year"`
	Genre       string `json:genre`
}

type Filter struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}