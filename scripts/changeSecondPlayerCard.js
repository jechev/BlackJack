var app=app || {};

(function (blackJack) {
    function changeSecondPlayerCard() {
        blackJack.playerSecondCard.click(function (event) {
            blackJack.newPlayerSecondCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.playerSecondCard.css('background-image','url("'+blackJack.newPlayerSecondCard.imgUrl +'")');

        });
    }
    blackJack.changeSecondPlayerCard=function () {
        return new changeSecondPlayerCard();
    }
})(app);