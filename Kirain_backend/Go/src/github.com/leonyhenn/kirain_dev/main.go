package main

import (
  "fmt"
  "net/http"
)

type Response struct{
	StatusCode int `json:"StatusCode"`
	Headers 	 map[string]string `json:"Headers"`
	Body 			 string `json:"Body"`
}


func index(w http.ResponseWriter, r *http.Request) {
	res := &Response{
		StatusCode:200,
		Headers:map[string]string{"Content-Type":"application-json"},
		Body:"Hello World"
	}
}

func about(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "<h1>About</h1>")
}

func main() {
  http.HandleFunc("/", index)
  http.HandleFunc("/about", about)
  fmt.Println("Server Starting...")
  http.ListenAndServe(":3000", nil)
}