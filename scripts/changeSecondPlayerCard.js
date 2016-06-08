//change second player card after click
var app=app || {};

(function (blackJack) {
    function changeSecondPlayerCard() {
        blackJack.playerSecondCard.click(function (event) {
            if(blackJack.playerFirstCard.find('.dynamic-dealer').length>0 && blackJack.playerSecondCard.find('.dynamic-dealer').length>0){
                blackJack.newPlayerSecondCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
                blackJack.playerSecondCard.empty();
                blackJack.moveSecondPlayerCard();
            }

        });
    }
    
    blackJack.changeSecondPlayerCard=function () {
        return new changeSecondPlayerCard();
    }
})(app);