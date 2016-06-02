var app=app || {};

(function (blackJack) {
    function  showCards() {
        var deck,
            dealerFirstCard,
            dealerSecondCard,
            dealerThirdCard,
            playerFirstCard,
            playerSecondCard,
            newDealerFirstCard,
            newDealerSecondCard,
            newDealerThirdCard,
            newPlayerFirstCard,
            newPlayerSecondCard;

        deck=blackJack.deck;
        dealerFirstCard=$('#dealer-card-1');
        dealerSecondCard=$('#dealer-card-2');
        dealerThirdCard=$('#dealer-card-3');
        playerFirstCard=$('#player-card-1');
        playerSecondCard=$('#player-card-2');

        newDealerFirstCard=deck[Math.floor(Math.random() * (deck.length-1))];
        newDealerSecondCard=deck[Math.floor(Math.random() * (deck.length-1))];
        newDealerThirdCard=deck[Math.floor(Math.random() * (deck.length-1))];
        newPlayerFirstCard=deck[Math.floor(Math.random() * (deck.length-1))];
        newPlayerSecondCard=deck[Math.floor(Math.random() * (deck.length-1))];

        dealerFirstCard.css('background-image','url("' + newDealerFirstCard.imgUrl + '")');
        dealerSecondCard.css('background-image','url("' + newDealerSecondCard.imgUrl + '")');
        dealerThirdCard.css('background-image','url("' + newDealerThirdCard.imgUrl + '")');
        playerFirstCard.css('background-image','url("' + newPlayerFirstCard.imgUrl + '")');
        playerSecondCard.css('background-image','url("' + newPlayerSecondCard.imgUrl + '")');

    }

    blackJack.showCards=function () {
        return new showCards();
    }
})(app);