var likeButtonOne = document.querySelector(".like-button-1");
var likeButtonTwo = document.querySelector(".like-button-2");
var likeButtonThree = document.querySelector(".like-button-3");

var likeCounterOne = document.querySelector(".like-counter-1");
var likeCounterTwo = document.querySelector(".like-counter-2");
var likeCounterThree = document.querySelector(".like-counter-3")


var firstCounter = 0;
var secondCounter = 0;
var thirdCounter = 0;

function counterOfLikesOne () {  
    if (likeButtonOne.onclick) {
        firstCounter++;
        likeCounterOne.textContent = firstCounter + " like(s)";
    }
}

function counterOfLikesTwo () {
    if (likeButtonTwo.onclick){
        secondCounter++;
        likeCounterTwo.textContent = secondCounter + " like(s)";
    }
}

function counterOfLikesThree () {
    if (likeButtonThree.onclick) {
        thirdCounter++;
        likeCounterThree.textContent = thirdCounter + " like(s)";
    }
}
