//change second player card after click
var app=app || {};

(function (blackJack) {
    function changeSecondPlayerCard() {
        blackJack.playerSecondCard.click(function (event) {
            blackJack.newPlayerSecondCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.playerSecondCard.empty();
            blackJack.moveSecondPlayerCard();
        });
    }
    blackJack.changeSecondPlayerCard=function () {
        return new changeSecondPlayerCard();
    }
})(app);