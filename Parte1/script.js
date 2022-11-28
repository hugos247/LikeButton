var likeButton = document.querySelector("#like-button")
var likeCounter = document.querySelector("#like-counter")
var counter = 0;

function counterOfLikes () {  
    if (likeButton.onclick) {
        counter++;
        likeCounter.textContent = counter + " like(s)";
    }
}