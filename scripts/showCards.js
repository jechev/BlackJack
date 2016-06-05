// execution  of functions from animation modules at specified time intervals

var app=app || {};

(function (blackJack) {
    function  showCards() {
        
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
    }

    blackJack.showCards=function () {
        return new showCards();
    }
})(app);