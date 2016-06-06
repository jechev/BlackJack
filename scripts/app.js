//main app -loading other modules
var app=app || {};

(function (blackJack) {
    $( document ).ready(function() {
        blackJack.showCards();
        blackJack.changeFirstPlayerCard();
        blackJack.changeSecondPlayerCard();
        blackJack.changeAllPlayerCards();
    });

})(app);