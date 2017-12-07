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

function names (){
    var x = document.getElementById("n1");
    var z1 = x.elements[0].value;   document.getElementById("name1").innerHTML  = z1;
    var y = document.getElementById("n2");
    var z2 = y.elements[0].value;    document.getElementById("name2").innerHTML = z2;
}

function score1 (){
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    x1.innerHTML++;
    check_set();
}

function score2 (){
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    x2.innerHTML++;
    check_set();
}

function check_set () {
	var x1 = document.getElementById("x1");
	var x2 = document.getElementById("x2");
    if ((x1.innerHTML >= 11) && (x1.innerHTML - x2.innerHTML >= 2)) {
    	var y1 = document.getElementById("y1");
    	y1.innerHTML++;
    	x1.innerHTML = 0;
    	x2.innerHTML = 0;
    	check_match();
    }	
    if ((x2.innerHTML >= 11) && (x2.innerHTML - x1.innerHTML >= 2)) {
    	var y2 = document.getElementById("y2");
    	y2.innerHTML++;
    	x1.innerHTML = 0;
    	x2.innerHTML = 0;
    	check_match();
    }	
}    

function check_match () {
	var x1 = document.getElementById("x1");
	var x2 = document.getElementById("x2");
	var y1 = document.getElementById("y1");
	var y2 = document.getElementById("y2");
	var a = document.getElementById("n1");
    var z1 = a.elements[0].value;
    var b = document.getElementById("n2");
    var z2 = b.elements[0].value;
	if (y1.innerHTML == 3) {
        x1 = 0;
        x2 = 0;
        y1 = 0;
        y2 = 0; 
        var end_text = "The game has ended, " + z1 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
	}
	if (y2.innerHTML == 3) {
		x1 = 0;
        x2 = 0;
        y1 = 0;
        y2 = 0; 
        var end_text = "The game has ended, " + z2 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
	} 
}