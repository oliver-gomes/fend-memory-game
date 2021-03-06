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

//dd(CardsList, 'iam cardsList here', 'c');

var shuffleOne = shuffle(CardsList);

//dd(shuffleOne, 'shuffleOne', 'c');

DisplayCards();

// Add event listener
$('.card').on('click', function(){
    fireMatcher(this);
});


/*-------------------Operation Area----------*/

function CardsInitialize(){
    var domCards = [];
    domCards = document.getElementsByClassName("card");
    return transformer(domCards);
}

function transformer (obj){
    var mapped = [];
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            mapped.push(obj[key].innerHTML)
        }
    }

    return mapped;
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
    var list = manipulateCards();
    replacer(list);
}


function replacer(list){
    document.getElementsByClassName("deck")[0].innerHTML = list.innerHTML;
}

function manipulateCards(){
    var list = document.createElement("ul");
    for (var i = 0; i < shuffleOne.length; i++){

        var li = document.createElement("li");
        li.innerHTML = shuffleOne[i];
        li.classList.add("card");
        list.appendChild(li);

    }
    return list;
}



function fireMatcher(card){
    displaySymbol(card);
    markedOpened(card);
}

function displaySymbol(card){
    $(card).addClass("show open");
}


incrementMoves = ()=> {
    moves++;
    $('.moves').text(moves);
}

isMatch = (openedCards)=>{
    let con1 = openedCards[0].innerHTML != openedCards[1].innerHTML;
    let con2 = $(openedCards[0]).is($(openedCards[1]));

    if (con1 || con2){
        return false;

    }

    return true;
};


handleMatchCase = (openedCards)=>{
    markAsMatched();

    openedCards = [];
}

markedAsMatched = (openedCards) =>{
    for(var i = 0; openedCards.length; i++){
        $(openedCards[i]).addClass("match");
    }
}

handleNoMatchCase = (openedCards)=>{

    styleDanger(openedCards);
    animateCard(openedCards);

    hideSymbols(openedCards);

    openedCards = [];
}

animateCard = ()=>{

}

hideSymbols = ()=> {
    for(var i = openedCards.length - 1; i >= 0; i--){
        $(openedCards[i]).removeClass("open show");
    }
}


styleDanger = (openedCards)=> {
    for (var i = openedCards.length - 1; i >=0 ; i--){
        $(openedCards[i]).addClass("danger")
    }
}

function markedOpened(card){
    if(openedCards.length > 0){

        incrementMoves();

        //displaySymbol(card);
        openedCards.push(card);

        if(isMatch(openedCards)) {
            handleMatchCase(openedCards);
        } else {
            handleNoMatchCase(openedCards);
        }
    } else {
        openedCards.push(card);
        incrementMoves();
    }
}
