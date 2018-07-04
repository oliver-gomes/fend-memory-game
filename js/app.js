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
ShuffledCardsList = shuffledCardsInitialize();
DisplayCards();

// Add event listener
fireMatcher();

/*-------------------Operation Area----------*/

