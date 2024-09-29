# -CLI-based-golf-card-game
GolfCard Game
Game Overview
A two-player card game where each player is dealt 4 cards face-down in a 2x2 grid. The goal is to have the lowest score by replacing cards from the deck or discard pile. Special rules apply to certain cards and pairs.

Game Steps
Create Deck: Standard deck with special scoring for certain cards (e.g., 7 = 0 points, Jack = -1, Queen = 12, King = 13).
Shuffle Deck: The deck is shuffled before the game starts.
Player Setup: Each player gets 4 cards face-down, arranged in a 2x2 grid.
Discard Pile: One card is drawn from the deck and placed face-up to start the discard pile.
Start Game: A random player starts, alternating turns between drawing from the deck or discard pile and replacing a card.
Game Flow
Turns: Each player draws a card and replaces one of their 4 cards, revealing it.
Game End: The game ends when one player has revealed all their cards. Both players' scores are calculated.
Scoring: The lowest score wins. Pairs (except 7s and Jacks) are worth 0 points.
Class Overview
Game Class: Manages the flow of the game, turn-taking, and scoring.
Card Class: Represents a single card with suit and value.
Deck Class: Creates and shuffles the deck.
Player Class: Manages a player's hand and actions during their turn.
