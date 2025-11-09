package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// 動作確認用
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Flashcard API is running 🚀",
		})
	})

	// ポート8080で起動
	r.Run(":8080")
}

