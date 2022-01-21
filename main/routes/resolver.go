package routes

import "time"

type request struct {
	URL string `json:"url"`
	Short string `json:"short"`
	Expiry time.Duration `json:"expiry"`
}

type response struct {
	URL string `json:"url"`
	Short string `json:"short"`
	Expiry time.Duration `json:"expiry"`
	XRateLimitRemaining int `json:"rate_limit_remaining"`
	XRateLimitReset time.Duration `json:"rate_limit_reset"`
}