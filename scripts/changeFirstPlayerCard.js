//change first player card after click
var app=app || {};

(function (blackJack) {
    function changeFirstPlayerCard() {
        blackJack.playerFirstCard.click(function (event) {
            blackJack.newPlayerFirstCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.playerFirstCard.empty();
            blackJack.moveFirstPlayerCard();
        });
    }
    
    blackJack.changeFirstPlayerCard=function () {
       return new changeFirstPlayerCard();
    }
})(app);