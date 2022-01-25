package main

import (
	"flag"
	"fmt"

	"./r"
	
	"./routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func initFlags() {
	flag.StringVar(&r.Port, "port", "8000", "port to listen on")
	flag.StringVar(&r.Key, "key", "0", "Authentication key for mutation of DB")
	flag.StringVar(&r.Env, "env", "router", "Environment to run in")
	flag.StringVar(&r.BaseUrl, "baseUrl", "", "URL where the server is hosted")
	flag.StringVar(&r.HomeUrl, "homeUrl", "", "Where to go if short doesn't exist")
	flag.IntVar(&r.Api_quota, "quota", 10, "Number of API calls allowed per minute")
	flag.StringVar(&r.DBHostName, "dbHostName", "localhost", "Hostname of the database")
	flag.StringVar(&r.DBPort, "dbPort", "3306", "Port of the database")
	flag.StringVar(&r.DBPasswd, "dbPasswd", "", "Password of the database")
	flag.Parse()

	if r.Env != "dev" && r.Key == "0" {
		panic("You must specify a key for production")
	}

	if r.BaseUrl == "" {
		panic("You must specify a baseUrl")
	}

	if r.HomeUrl == "" && r.Env == "site" {
		panic("You must specify a homeUrl")
	}

	fmt.Println("Flags initialised")
}

func setupRoutes(app *fiber.App) {
	app.Static("/", "../web")
	app.Get("/:short", routes.ResolveURL)
	app.Post("/shorten", routes.ShortenURL)
}

func main() {
	fmt.Println("Preparing server startup...")
	initFlags()

	app := fiber.New()
	app.Use(cors.New())
	app.Use(logger.New())

	setupRoutes(app)
	fmt.Println("Starting server on http://localhost:" + r.Port)
	app.Listen(":" + r.Port)
}
