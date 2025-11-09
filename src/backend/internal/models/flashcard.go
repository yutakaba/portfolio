package models

type FlashCard struct {
	ID     int    `json:"id"`
	Front  string `json:"front"`
	Back   string `json:"back"`
	Learned bool  `json:"learned"`
}
