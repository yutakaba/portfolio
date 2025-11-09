package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"portfolio-backend/internal/models"
)

var flashcards []models.FlashCard
var nextID = 1

// 全件取得
func GetFlashcards(c *gin.Context) {
	// 空でも必ず [] を返すようにする
	if len(flashcards) == 0 {
		c.JSON(http.StatusOK, []models.FlashCard{})
		return
	}
	c.JSON(http.StatusOK, flashcards)
}

// 新規追加
func AddFlashcard(c *gin.Context) {
	var newCard models.FlashCard
	if err := c.BindJSON(&newCard); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newCard.ID = nextID
	nextID++
	flashcards = append(flashcards, newCard)

	c.JSON(http.StatusCreated, newCard)
}

// 削除（覚えたカードを外す）
func DeleteFlashcard(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	for i, card := range flashcards {
		if card.ID == id {
			flashcards = append(flashcards[:i], flashcards[i+1:]...)
			c.Status(http.StatusNoContent)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Card not found"})
}
