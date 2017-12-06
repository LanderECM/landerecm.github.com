window.onload = function (){
var x1 = document.getElementById("x1");
x1.innerHTML = 0;
var x2 = document.getElementById("x2");
x2.innerHTML = 0;
var y1 = document.getElementById("y1");
y1.innerHTML = 0;
var y2 = document.getElementById("y2");
y2.innerHTML = 0;
}
function score1 (){
    var x1 = document.getElementById("x1");
    x1.innerHTML++;
}
function score2 (){
    var x2 = document.getElementById("x2");
    x2.innerHTML++;
}