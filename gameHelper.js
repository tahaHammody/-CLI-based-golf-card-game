function calculateScore(player) {
    const valueMap = {
        'Ace': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
        '7': 0, '8': 8, '9': 9, '10': 10, 'Jack': -1, 'Queen': 12, 'King': 13
    };

    let score = 0;
    //  set to check cards that form a pair and are counted as 0
    const pairedCards = new Set(); 

    for (let i = 0; i < player.hand.length; i++) {
        if (pairedCards.has(i)) continue;

        let cardValue = valueMap[player.hand[i].value];

        // checking for pairs 
        for (let j = i + 1; j < player.hand.length; j++) {
            if (player.hand[i].value === player.hand[j].value && !['7', 'Jack'].includes(player.hand[i].value)) {
                pairedCards.add(i);
                pairedCards.add(j);
                cardValue = 0; 
                break;
            }
        }

        score += cardValue;
    }

    return score;
}

module.exports = { calculateScore };
