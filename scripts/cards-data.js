//arrays with cards data
var app = app || {};

(function (blackJack) {
    var deckWithAllCards=[],
        allCardsOfClubs,
        allCardsOfDiamonds,
        allCardsOfHearts,
        allCardsOfSpades;

    allCardsOfClubs=[
        {
            imgUrl:'img/2_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/3_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/4_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/5_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/6_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/7_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/8_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/9_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/10_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/jack_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/queen_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/king_of_clubs.png',
            isUsed:false
        },
        {
            imgUrl:'img/ace_of_clubs.png',
            isUsed:false
        }];

    allCardsOfDiamonds=[
        {
            imgUrl:'img/2_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/3_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/4_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/5_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/6_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/7_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/8_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/9_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/10_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/jack_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/queen_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/king_of_diamonds.png',
            isUsed:false
        },
        {
            imgUrl:'img/ace_of_diamonds.png',
            isUsed:false
        }];

    allCardsOfHearts=[
        {
            imgUrl:'img/2_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/3_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/4_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/5_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/6_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/7_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/8_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/9_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/10_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/jack_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/queen_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/king_of_hearts.png',
            isUsed:false
        },
        {
            imgUrl:'img/ace_of_hearts.png',
            isUsed:false
        }];

    allCardsOfSpades=[
        {
            imgUrl:'img/2_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/3_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/4_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/5_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/6_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/7_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/8_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/9_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/10_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/jack_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/queen_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/king_of_spades.png',
            isUsed:false
        },
        {
            imgUrl:'img/ace_of_spades.png',
            isUsed:false
        }];

    deckWithAllCards=deckWithAllCards.concat(allCardsOfClubs,allCardsOfDiamonds,allCardsOfHearts,allCardsOfSpades);
    blackJack.deck=deckWithAllCards;
})(app);


