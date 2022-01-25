package routes

import (
	"github.com/go-redis/redis/v8"
	"github.com/gofiber/fiber/v2"
	"github.com/lucxjo/ligitaj/main/db"
	"github.com/lucxjo/ligitaj/main/r"
)

func ResolveURL(ctx *fiber.Ctx) (error) {
	url := ctx.Params("short")
	rdb := db.CreateClient(0)
	defer rdb.Close()

	value, err := rdb.Get(db.Ctx, url).Result()

	if err == redis.Nil {
		return ctx.Redirect(r.HomeUrl)
	} else if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal DB error", "message": err.Error()})
	}

	rInr := db.CreateClient(1)

	_ = rInr.Incr(db.Ctx, "counter")

	return ctx.Redirect(value, 301)
}