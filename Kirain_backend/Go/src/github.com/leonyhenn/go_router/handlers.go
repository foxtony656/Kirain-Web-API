package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
	"io/ioutil"
	"io"
	"log"
)


func Index(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Welcome")
}

func TodoIndex(w http.ResponseWriter, r *http.Request){
	// todos := Todos{
	// 	Todo{Name: "Write presentation"},
	// 	Todo{Name: "Host meetup"},
	// }
	w.Header().Set("Content-Type","application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(todos); err != nil{
		panic(err)
	}
}

func TodoShow(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	todoId := vars["todoId"]
	fmt.Fprintf(w, "Todo show:",todoId)
	//Todo show:%!(EXTRA string=1)
}

func TodoCreate(w http.ResponseWriter, r *http.Request) {
    var todo Todo
    body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
    if err != nil {
        panic(err)
    }
    if err := r.Body.Close(); err != nil {
        panic(err)
    }
    if err := json.Unmarshal(body, &todo); err != nil {
    		fmt.Printf("error")
    		panic(err)
        w.Header().Set("Content-Type", "application/json; charset=UTF-8")
        w.WriteHeader(422) // unprocessable entity
        if err := json.NewEncoder(w).Encode(err); err != nil {
            panic(err)
        }
    }
    log.Printf("ok")
    t := RepoCreateTodo(todo)
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    w.WriteHeader(http.StatusCreated)
    if err := json.NewEncoder(w).Encode(t); err != nil {
        panic(err)
    }
}