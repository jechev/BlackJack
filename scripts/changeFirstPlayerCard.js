var app=app || {};

(function (blackJack) {
    function changeFirstPlayerCard() {
        blackJack.playerFirstCard.click(function (event) {
            blackJack.newPlayerFirstCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.playerFirstCard.css('background-image','url("'+blackJack.newPlayerFirstCard.imgUrl +'")');
        });
    }
    
    blackJack.changeFirstPlayerCard=function () {
       return new changeFirstPlayerCard();
    }
})(app);