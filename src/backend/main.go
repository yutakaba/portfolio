package main

import (
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "portfolio-backend/internal/routes"
    "time"
)

func main() {
    r := gin.Default()

    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))

    routes.RegisterRoutes(r)
    r.Run(":8080")
}
