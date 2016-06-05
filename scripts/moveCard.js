//module for animation move cards
var app=app || {};

(function (blackJack) {
    function moveFirstDealerCard() {
        var img = $('<img class="dynamic-dealer">');
        img.attr('src', blackJack.newDealerFirstCard.imgUrl);
        img.appendTo(blackJack.deckPlace);
        img.animate({left: "-801px"}, 3000,function () {
            blackJack.dealerFirstCard.append(img);
            img.css('left','0px');
        });
    }

    function moveSecondDealerCard() {
        var img = $('<img class="dynamic-dealer">');
        img.attr('src', blackJack.newDealerSecondCard.imgUrl);
        img.appendTo(blackJack.deckPlace);
        img.animate({left: "-564px"}, 2000,function () {
            blackJack.dealerSecondCard.append(img);
            img.css('left','0px');
        });
    }

    function moveThirdDealerCard() {
        var img = $('<img class="dynamic-dealer">');
        img.attr('src', blackJack.newDealerThirdCard.imgUrl);
        img.appendTo(blackJack.deckPlace);
        img.animate({left: "-290px"}, 1000,function () {
            blackJack.dealerThirdCard.append(img);
            img.css('left','0px');
        });
    }

    function moveFirstPlayerCard() {
        var img = $('<img class="dynamic-dealer">');
        img.attr('src', blackJack.newPlayerFirstCard.imgUrl);
        img.appendTo(blackJack.deckPlace);
        img.animate({left: "-527px",top:"346px"}, 3000,function () {
            blackJack.playerFirstCard.append(img);
            img.css('left','0px');
            img.css('top','0px');
        });
    }

    function moveSecondPlayerCard() {
        var img = $('<img class="dynamic-dealer">');
        img.attr('src', blackJack.newPlayerSecondCard.imgUrl);
        img.appendTo(blackJack.deckPlace);
        img.animate({left: "-245px",top:"346px"}, 2000,function () {
            blackJack.playerSecondCard.append(img);
            img.css('left','0px');
            img.css('top','0px');
        });
    }

    
    blackJack.moveFirstDealerCard=function () {
        return new moveFirstDealerCard();
    };
    
    blackJack.moveSecondDealerCard=function () {
        return new moveSecondDealerCard();
    };
    
    blackJack.moveThirdDealerCard=function () {
        return new moveThirdDealerCard();
    };

    blackJack.moveFirstPlayerCard=function () {
        return new moveFirstPlayerCard();
    };

    blackJack.moveSecondPlayerCard=function () {
        return new moveSecondPlayerCard();
    };
    
})(app);