package UrlDecoder

import (
	"log"
	"net/url"
)
func UrlDecoder(adress string) string {
	encodedValue := adress
	decodedValue, err := url.QueryUnescape(encodedValue)
	if err != nil {
		log.Fatal(err)
	}
	return decodedValue
}
