package helpers

import (
	"strings"
)

func EnforceHTTPS(url string) string {
	if url[:4] != "http" {
		return "https://" + url
	} else if url[:5] != "https" {
		split := strings.Split(url, ":")
		return "https://" + split[1]
	}
	return url
}
