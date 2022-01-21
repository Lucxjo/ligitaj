package main

import (
	"flag"
	"fmt"

	"./routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

var (
	port      string
	key       string
	env       string
	BaseUrl   string
	HomeUrl   string
	api_quota int
)

func initFlags() {
	flag.StringVar(&port, "port", "8000", "port to listen on")
	flag.StringVar(&key, "key", "0", "Authentication key for mutation of DB")
	flag.StringVar(&env, "env", "router", "Environment to run in")
	flag.StringVar(&BaseUrl, "baseUrl", "", "URL where the server is hosted")
	flag.StringVar(&HomeUrl, "homeUrl", "", "Where to go if short doesn't exist")
	flag.IntVar(&api_quota, "quota", 10, "Number of API calls allowed per minute")
	flag.Parse()

	if env != "dev" && key == "0" {
		panic("You must specify a key for production")
	}

	if BaseUrl == "" {
		panic("You must specify a baseUrl")
	}

	if HomeUrl == "" && env == "site" {
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
	fmt.Println("Starting server on http://localhost:" + port)
	app.Listen(":" + port)
}
