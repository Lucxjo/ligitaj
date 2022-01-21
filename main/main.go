package main

import (
	"flag"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

var (
	port string
	key string
	env string
	baseUrl string
	homeUrl string
)

func initFlags() {
	flag.StringVar(&port, "port", "8000", "port to listen on")
	flag.StringVar(&key, "key", "0", "Authentication key for mutation of DB")
	flag.StringVar(&env, "env", "router", "Environment to run in")
	flag.StringVar(&baseUrl, "baseUrl", "", "URL where the server is hosted")
	flag.StringVar(&homeUrl, "homeUrl", "", "Where to go if short doesn't exist")
	flag.Parse()

	if env != "dev" && key == "0" {
		panic("You must specify a key for production")
	}

	if baseUrl == "" {
		panic("You must specify a baseUrl")
	}

	if homeUrl == "" && env == "site" {
		panic("You must specify a homeUrl")
	}

	fmt.Println("Flags initialised")
}


func main() {
	fmt.Println("Preparing server startup...")
	initFlags()

	r := mux.NewRouter()

	r.HandleFunc("/{short}", func (w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		short := vars["short"]
		fmt.Fprintf(w, "Short: %s", short)
	})

	r.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		if env == "site" {
			http.Redirect(rw, r, homeUrl, http.StatusFound)
		} else {
			http.ServeFile(rw, r, "./web/index.html")
		}
	})

	fmt.Println("Starting server on http://localhost:" + port)
	http.Handle("/", r)
    http.ListenAndServe(":"+port, r)
}