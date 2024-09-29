const { createDeck, shuffleDeck } = require('./deck');
const { Player } = require('./player');
const { calculateScore } = require('./gameHelper');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    constructor() {
        this.deck = shuffleDeck(createDeck());
        this.discardPile = [];
        this.players = [new Player('Player 1'), new Player('Player 2')];
        // Random player tp starts
        this.currentPlayerIndex = Math.floor(Math.random() * 2); 
        this.isGameOverFlag = false; 
        this.setupGame();
    }

    setupGame() {
        // give 4 cards to each player
        this.players.forEach(player => player.dealCards(this.deck));

        // replace one card face up in the discard pile
        this.discardPile.push(this.deck.pop());

        console.log('Game setup complete. Starting the game...');
        this.playTurn(this.currentPlayerIndex); 
    }

    playTurn(playerIndex) {
        if (this.isGameOverFlag) return; 

        const currentPlayer = this.players[playerIndex];
        console.log(`\n${currentPlayer.name}'s turn`);

        this.displayBoard();

        currentPlayer.takeTurn(this.deck, this.discardPile, () => {
            if (this.isGameOver()) {
                this.endGame();
            } else {
                const nextPlayerIndex = (playerIndex + 1) % 2; 
                this.playTurn(nextPlayerIndex); 
            }
        });
    }

    displayBoard() {
        console.log('Current board:');
        // Display both players hands
        this.players.forEach(player => player.displayHand()); 
        const topDiscardCard = this.discardPile[this.discardPile.length - 1];
        console.log(`Discard pile top card: ${topDiscardCard.value} of ${topDiscardCard.suit}`);
    }

    isGameOver() {
        if (this.isGameOverFlag) return true; 
        const allFaceUp = this.players.some(player => player.isAllFaceUp());
        if (allFaceUp) {
            this.isGameOverFlag = true; 
        }
        return allFaceUp;
    }

    endGame() {
        console.log('Game over! Final hands:');
        this.players.forEach(player => player.revealHand());

        const scores = this.players.map(player => calculateScore(player));
        const winner = scores[0] < scores[1] ? this.players[0].name : this.players[1].name;
        console.log(`\n${winner} wins with scores: ${scores.join(' vs ')}`);

        rl.close();
    }
}

// Start the game
const game = new Game();
