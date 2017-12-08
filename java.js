var serve1 = 0;
var serve2 = 0;
var set_serve = 1;
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
    serve_counter();
}

function score2 (){
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    x2.innerHTML++;
    check_set();
    serve_counter();
}

function check_set () {
	var x1 = document.getElementById("x1");
	var x2 = document.getElementById("x2");
    if ((x1.innerHTML >= 11) && (x1.innerHTML - x2.innerHTML >= 2)) {
    	var y1 = document.getElementById("y1");
    	y1.innerHTML++;
    	x1.innerHTML = 0;
    	x2.innerHTML = 0;
        serve1 = 0;
        serve2 = 0;
    	check_match();
    }	
    if ((x2.innerHTML >= 11) && (x2.innerHTML - x1.innerHTML >= 2)) {
    	var y2 = document.getElementById("y2");
    	y2.innerHTML++;
    	x1.innerHTML = 0;
    	x2.innerHTML = 0;
        serve1 = 0;
        serve2 = 0;
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
        x1.innerHTML = 0;
        x2.innerHTML = 0;
        y1.innerHTML = 0;
        y2.innerHTML = 0; 
        var end_text = "The game has ended, " + z1 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
	}
	if (y2.innerHTML == 3) {
		x1.innerHTML = 0;
        x2.innerHTML = 0;
        y1.innerHTML = 0;
        y2.innerHTML = 0; 
        var end_text = "The game has ended, " + z2 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
        var game_again = "Do you want to play again?";
        document.getElementById("new_game").innerHTML = game_again;
	} 
}

function new_game () {
	x1.innerHTML = 0;
    x2.innerHTML = 0;
    y1.innerHTML = 0;
    y2.innerHTML = 0;
    var new_game_text = "Have a good game!";
    document.getElementById("end_screen").innerHTML = new_game_text;
    var new_player1 = "player 1";
    var new_player2 = "player 2";
    document.getElementById("name1").innerHTML  = new_player1;
    document.getElementById("name2").innerHTML  = new_player2;
    document.getElementById("nam1").value  = "player 1";
    document.getElementById("nam2").value  = "player 2";
    document.getElementById("setP1").style.backgroundColor = "blue";
	document.getElementById("setP2").style.backgroundColor = "red";
    serve1 = 0;
	serve2 = 0;
	set_serve = 1;
}

function serve_counter () {
	serve2++;
    if (((y1.innerHTML + y2.innerHTML == 1) || (y1.innerHTML + y2.innerHTML == 3)) && (x1.innerHTML + x2.innerHTML == 0)) {
        set_serve = 0;
        serve2 = 0;   
    }
    else if (x1.innerHTML + x2.innerHTML == 0){
        set_serve = 1;
        serve2 = 0;
    }
    if (serve2 - serve1 >= 2){
	    if (set_serve == 1){
	        document.getElementById("setP2").style.backgroundColor = "blue";
	        document.getElementById("setP1").style.backgroundColor = "red";
	        set_serve = 0;
        }
    	else {
    		document.getElementById("setP1").style.backgroundColor = "blue";
    		document.getElementById("setP2").style.backgroundColor = "red";
	    	if (x1.innerHTML + x2.innerHTML != 0){
            set_serve = 1;
        }
        else {
            set_serve = 0;
        }
    	}			
    serve1 = serve2;
	}
}

function check () {
var serve_check = serve1 + ", en: " + serve2 + "+nog dit" + set_serve;
document.getElementById("check_serve").innerHTML = serve_check;
}

setInterval(check, 1000);
