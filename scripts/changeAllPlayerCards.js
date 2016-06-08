//change all player cards after click button "hit"
var app=app || {};

(function (blackJack) {
    function changeAllPlayerCards() {
        blackJack.hitButton.click(function (event) {
            if(blackJack.playerFirstCard.find('.dynamic-dealer').length>0 && blackJack.playerSecondCard.find('.dynamic-dealer').length>0){
            blackJack.newPlayerFirstCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];
            blackJack.newPlayerSecondCard=blackJack.deck[Math.floor(Math.random() * (blackJack.deck.length-1))];

            blackJack.hitButton.prop('disabled',true);
            blackJack.playerFirstCard.empty();
            blackJack.playerSecondCard.empty();
            blackJack.moveFirstPlayerCard();
            
            setTimeout(function () {
                blackJack.moveSecondPlayerCard();
            },3000);
            
            setTimeout(function () {
                blackJack.hitButton.prop('disabled',false);
            },5000);
            }
        });
    }
    blackJack.changeAllPlayerCards=function () {
        return new changeAllPlayerCards();
    }
})(app);
