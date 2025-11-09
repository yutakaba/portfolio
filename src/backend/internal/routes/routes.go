package routes

import (
    "github.com/gin-gonic/gin"
    "portfolio-backend/internal/handlers"
)

func RegisterRoutes(r *gin.Engine) {
    r.GET("/flashcards", handlers.GetFlashcards)
    r.POST("/flashcards", handlers.AddFlashcard)
    r.DELETE("/flashcards/:id", handlers.DeleteFlashcard)
}
