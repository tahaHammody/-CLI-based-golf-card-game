# CLI-Based Golf Card Game

## Game Overview
**GolfCard** is a two-player card game where each player is dealt 4 cards face-down in a 2x2 grid.  
The goal is to have the lowest score by replacing cards from the deck or discard pile. Special rules apply to certain cards and pairs.

---

## Game Steps

1. **Create Deck**: A standard deck is created with special scoring for certain cards:
   - 7 = 0 points
   - Jack = -1 point
   - Queen = 12 points
   - King = 13 points

2. **Shuffle Deck**: The deck is shuffled before the game begins.

3. **Player Setup**: Each player is dealt 4 cards face-down, arranged in a 2x2 grid.

4. **Discard Pile**: One card is drawn from the deck and placed face-up to start the discard pile.

5. **Start Game**: A random player is selected to start, alternating turns between drawing from the deck or discard pile and replacing a card.

---

## Game Flow

1. **Player Turn**: Each player draws a card from the deck or the discard pile and replaces one of their 4 cards, revealing it.

2. **Game End**: The game ends when one player has revealed all of their cards. Both players' scores are calculated.

3. **Scoring**: The player with the lowest score wins. Pairs (except for 7s and Jacks) are worth 0 points.

---

## Class Overview

- **Game Class**: Manages the overall flow of the game, turn-taking, and scoring.
- **Card Class**: Represents a card with its suit and value.
- **Deck Class**: Creates and shuffles the deck.
- **Player Class**: Manages a player's hand and actions during their turn.
