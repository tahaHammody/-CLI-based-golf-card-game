const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.revealed = Array(4).fill(false);
    }

    dealCards(deck) {
        this.hand = deck.splice(0, 4); 
    }

    displayHand() {
        const handDisplay = this.hand.map((card, index) =>
            this.revealed[index] ? `${card.value} of ${card.suit}` : '[Hidden]'
        );
        console.log(`${this.name}'s hand:`);
        console.log(`${handDisplay[0]} | ${handDisplay[1]}`);
        console.log(`${handDisplay[2]} | ${handDisplay[3]}`);
    }

    takeTurn(deck, discardPile, callback) {
        this.askForAction(deck, discardPile, callback);
    }

    askForAction(deck, discardPile, callback) {
        rl.question('Draw from deck (1) or discard pile (2)? ', (action) => {
            action = action.trim(); // Clean up input
            
            if (action.length > 1 || (action !== '1' && action !== '2')) {
                console.log('Invalid choice. Please enter 1 to draw from deck or 2 to draw from discard pile.');
                return this.askForAction(deck, discardPile, callback); 
            }

            let drawnCard;

            if (action === '1') {
                drawnCard = deck.pop();
                console.log(`Drew card: ${drawnCard.value} of ${drawnCard.suit}`);
            } else {
                drawnCard = discardPile.pop();
                console.log(`Took from discard pile: ${drawnCard.value} of ${drawnCard.suit}`);
            }

            this.askForCardReplacement(drawnCard, discardPile, callback);
        });
    }

    askForCardReplacement(drawnCard, discardPile, callback) {
        rl.question('Replace which card (1-4)? ', (replaceIndex) => {

            if (replaceIndex.length > 1 || !['1', '2', '3', '4'].includes(replaceIndex)) {
                console.log('Invalid choice. Please enter a number between 1 and 4.');
                return this.askForCardReplacement(drawnCard, discardPile, callback); 
            }

            replaceIndex = parseInt(replaceIndex, 10) - 1;

            const discardedCard = this.hand[replaceIndex];
            this.hand[replaceIndex] = drawnCard;
            this.revealed[replaceIndex] = true;
            discardPile.push(discardedCard);

            console.log(`${this.name} replaced ${discardedCard.value} with ${drawnCard.value}`);
            callback(); 
        });
    }

    isAllFaceUp() {
        return this.revealed.every(faceUp => faceUp);
    }

    revealHand() {
        this.revealed.fill(true);
        this.displayHand();
    }
}

module.exports = { Player };
