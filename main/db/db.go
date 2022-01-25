package db

import (
	"context"

	"../r"
	"github.com/go-redis/redis/v8"
)

var Ctx = context.Background()

func CreateClient(dbNo int) *redis.Client {
	rdb := redis.NewClient(&redis.Options{
		Addr: "redis://" + r.DBHostName + ":" + r.DBPort,
		DB:   dbNo,
		Password: r.DBPasswd,
	})

	return rdb
}