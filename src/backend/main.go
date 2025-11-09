package main

import (
	"github.com/gin-gonic/gin"
	"portfolio-backend/internal/routes"
)

func main() {
	r := gin.Default()

	routes.RegisterRoutes(r)

	r.Run(":8080")
}
