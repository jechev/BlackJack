// execution  of functions from animation modules at specified time intervals
var app=app || {};

(function (blackJack) {
    function  showCards() {
        //disable hit button before show all cards
        blackJack.hitButton.prop('disabled',true);
        blackJack.playerFirstCard.prop('disabled',true);
        blackJack.moveFirstDealerCard();
        setTimeout(function () {
            blackJack.moveSecondDealerCard();
        },3000);
        setTimeout(function () {
            blackJack.moveThirdDealerCard();
        },5000);
        setTimeout(function () {
            blackJack.moveFirstPlayerCard();
        },6000);
        setTimeout(function () {
            blackJack.moveSecondPlayerCard();
        },9000);

        //enable hit button after show all cards
        setTimeout(function () {
            blackJack.hitButton.prop('disabled',false);
        },11000);
    }

    blackJack.showCards=function () {
        return new showCards();
    }
})(app);