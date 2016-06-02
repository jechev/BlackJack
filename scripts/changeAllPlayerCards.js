var app=app || {};
(function (blackJack) {
    function changeAllPlayerCards() {
        blackJack.hitButton.click(function (event) {
            blackJack.newPlayerFirstCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.newPlayerSecondCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.playerFirstCard.css('background-image','url("' + blackJack.newPlayerFirstCard.imgUrl + '")');
            blackJack.playerSecondCard.css('background-image','url("' + blackJack.newPlayerSecondCard.imgUrl + '")');
        });
    }
    blackJack.changeAllPlayerCards=function () {
        return new changeAllPlayerCards();
    }
})(app);
