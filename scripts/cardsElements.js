var app=app || {};

(function (blackJack) {
    var deck,
        deckPlace,
        dealerFirstCard,
        dealerSecondCard,
        dealerThirdCard,
        playerFirstCard,
        playerSecondCard,
        hitButton,
        newDealerFirstCard,
        newDealerSecondCard,
        newDealerThirdCard,
        newPlayerFirstCard,
        newPlayerSecondCard;
    
    deck=blackJack.deck;
    deckPlace=$('#deck-place');
    dealerFirstCard=$('#dealer-card-1');
    dealerSecondCard=$('#dealer-card-2');
    dealerThirdCard=$('#dealer-card-3');
    playerFirstCard=$('#player-card-1');
    playerSecondCard=$('#player-card-2');
    hitButton=$('#hit-button');

    newDealerFirstCard=deck[Math.floor(Math.random() * (deck.length-1))];
    newDealerSecondCard=deck[Math.floor(Math.random() * (deck.length-1))];
    newDealerThirdCard=deck[Math.floor(Math.random() * (deck.length-1))];
    newPlayerFirstCard=deck[Math.floor(Math.random() * (deck.length-1))];
    newPlayerSecondCard=deck[Math.floor(Math.random() * (deck.length-1))];

    blackJack.deckPlace=deckPlace;
    blackJack.dealerFirstCard=dealerFirstCard;
    blackJack.dealerSecondCard=dealerSecondCard;
    blackJack.dealerThirdCard=dealerThirdCard;
    blackJack.playerFirstCard=playerFirstCard;
    blackJack.playerSecondCard=playerSecondCard;
    blackJack.newDealerFirstCard=newDealerFirstCard;
    blackJack.newDealerSecondCard=newDealerSecondCard;
    blackJack.newDealerThirdCard=newDealerThirdCard;
    blackJack.newPlayerFirstCard=newPlayerFirstCard;
    blackJack.newPlayerSecondCard=newPlayerSecondCard;
    blackJack.hitButton=hitButton;

})(app);