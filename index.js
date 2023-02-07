// Returns a random integer from 1 to 6:
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomImage1);
img2.setAttribute("src", randomImage2);


//Changing the title based on results
var verdict;

if(randomImage1 === randomImage2)
    verdict = "Draw!";
else if(randomImage1 > randomImage2)
    verdict = "🚩 Player 1 Wins!";
else
    verdict = "Player 2 Wins! 🚩";

document.querySelector("h1").innerHTML = verdict;