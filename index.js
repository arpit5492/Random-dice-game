var randomNumber1 = Math.random()*6;
var roundNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2 = Math.random()*6;
var roundNumber2 = Math.floor(randomNumber2)+1;
function image1(a){
    if(a===1){
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice1.png");
    }
    else if(a===2){
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice2.png");
    }
    else if(a===3){
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice3.png");
    }
    else if(a===4){
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice4.png");
    }
    else if(a===5){
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice5.png");
    }
    else{
        document.querySelector(".container .dice .img1").setAttribute("src","./images/dice6.png");
    }
}
function image2(b){
    if(b===1){
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice1.png");
    }
    else if(b===2){
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice2.png");
    }
    else if(b===3){
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice3.png");
    }
    else if(b===4){
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice4.png");
    }
    else if(b===5){
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice5.png");
    }
    else{
        document.querySelector(".container .dice .img2").setAttribute("src","./images/dice6.png");
    }
}
function winnerLoser(a,b){
    if(a>b){
        document.querySelector(".container h1").innerHTML = "<h1>Player 1 Wins!! 🚩</h1>";
    }
    else if(a<b){
        document.querySelector(".container h1").innerHTML = "<h1>Player 2 Wins!! 🚩</h1>";
    }
    else{
        document.querySelector(".container h1").innerHTML = "<h1>Draw!!</h1>";
    }
}
image1(roundNumber1);
image2(roundNumber2);
winnerLoser(roundNumber1,roundNumber2);
