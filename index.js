


var a = (Math.random());
var randomNumber1=(Math.floor(a*6))+1;
var randomImage= "dice"+randomNumber1+".png";
var finalsrc= "./images/"+randomImage;

var img1=document.querySelectorAll("img")[0].setAttribute("src",finalsrc);

var b = (Math.random());
var randomNumber2=(Math.floor(b*6))+1;
var randomImage1= "dice"+randomNumber2+".png";
var finalsrc1= "./images/"+randomImage1;
var img2=document.querySelectorAll("img")[1].setAttribute("src",finalsrc1);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Its a draw!!";
}



// var a = (Math.random());
// var randomNumber1 = (Math.floor(a * 6)) + 1;
// var randomImage = "dice" + randomNumber1 + ".png";
// var finalsrc = "./images/" + randomImage;

// var img1 = document.querySelectorAll("img")[0].setAttribute("src", finalsrc);

// var b = (Math.random());
// var randomNumber2 = (Math.floor(b * 6)) + 1;
// var randomImage1 = "dice" + randomNumber2 + ".png";
// var finalsrc1 = "./images/" + randomImage1;
// var img2 = document.querySelectorAll("img")[1].setAttribute("src", finalsrc1);

// if (randomNumber1 > randomNumber2) {
//     document.querySelectorAll("h1")[0].textContent = "Player 1 wins";
// } else if (randomNumber2 > randomNumber1) {
//     document.querySelectorAll("h1")[0].textContent = "Player 2 wins";
// } else {
//     document.querySelectorAll("h1")[0].textContent = "It's a draw!!";
// }
