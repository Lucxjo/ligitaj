package routes

import (
	"time"

	"github.com/lucxjo/ligitaj/main/helpers"
	"github.com/asaskevich/govalidator"
	"github.com/gofiber/fiber/v2"
)

type request struct {
	URL string `json:"url"`
	Short string `json:"short"`
	Expiry time.Duration `json:"expiry"`
}

type response struct {
	URL string `json:"url"`
	Short string `json:"short"`
	Expiry time.Duration `json:"expiry"`
}

func ShortenURL(ctx *fiber.Ctx) error {
	body := new(request)

	if err := ctx.BodyParser(&body); err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Can't parse request body", "message": err.Error()})
	}

	if !govalidator.IsURL(body.URL) {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "URL is not valid"})
	}

	body.URL = helpers.EnforceHTTPS(body.URL)

	return nil
}