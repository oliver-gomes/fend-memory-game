// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*-------------------Controller Area----------*/

var openedCards = []; // two max
var movesCounter = 0;
var ratingStars = 0;
var clicks = 0;
CardsList = CardsInitialize();

dd(typeof CardsList, 'iam cardsList here', 'c');

var shuffleOne = shuffle(CardsList);

dd(shuffleOne, 'shuffleOne', 'c');

DisplayCards();

// Add event listener
$('.card').on('click', function(){
    fireMatcher(this);
});


/*-------------------Operation Area----------*/

function CardsInitialize(){
    var domCards = [];
    domCards = document.getElementsByClassName("card");
    return domCards;
}

function transformer (obj){
    var
}

function dd(obj, string = 'Your target', mode = 'l' ){
    switch(mode){
        case 'l':
                var out = "";
                for(var i in obj){
                    out += i + " : " + obj[i] + "\n";
                }
                alert(string + " : " + out);
            break;
        case 'c':
            console.log(string);
            console.log(obj);
            break;
    }
}
function DisplayCards(){

}

function fireMatcher(card){
    displaySymbol(card);
    markedOpened(card);
}

function displaySymbol(){

}

function markedOpened(card){

}
