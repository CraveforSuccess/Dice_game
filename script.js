var img1 = document.getElementById("img1");
img1.setAttribute("src","./images/dice6.png");
var img2 = document.getElementById("img2");
img2.setAttribute("src","./images/dice6.png");



// random generator one

var random_num = Math.random();
random_num = random_num * 6;
random_num = Math.floor(random_num) + 1;
console.log(random_num);

if(random_num==1){

    img1.setAttribute("src","./images/dice1.png")
}
if(random_num==2){

    img1.setAttribute("src","./images/dice2.png")
}
if(random_num==3){

    img1.setAttribute("src","./images/dice3.png")
}
if(random_num==4){

    img1.setAttribute("src","./images/dice4.png")
}
if(random_num==5){

    img1.setAttribute("src","./images/dice5.png")
}
if(random_num==6){

    img1.setAttribute("src","./images/dice6.png")
}
// img2 images
var random_num1 = Math.random();
random_num1 = random_num1 * 6;
random_num1 = Math.floor(random_num1) + 1;

if(random_num1==1){

    img2.setAttribute("src","./images/dice1.png")
}
if(random_num1==2){

    img2.setAttribute("src","./images/dice2.png")
}
if(random_num1==3){

    img2.setAttribute("src","./images/dice3.png")
}
if(random_num1==4){

    img2.setAttribute("src","./images/dice4.png")
}
if(random_num1==5){

    img2.setAttribute("src","./images/dice5.png")
}
if(random_num1==6){

    img2.setAttribute("src","./images/dice6.png")
}

if(random_num>random_num1){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
if(random_num<random_num1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
if(random_num==random_num1){
    document.querySelector("h1").innerHTML = "Draw!!!"
}