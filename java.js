window.onload = function (){
var P1_points = document.getElementById("P1_points");
P1_points.innerHTML = 0;
var P1_sets = document.getElementById("P1_sets");
P1_sets.innerHTML = 0;
var P2_points = document.getElementById("P2_points");
P2_points.innerHTML = 0;
var P2_sets = document.getElementById("P2_sets");
P2_sets.innerHTML = 0;
}

var points = new Array(4);
points[0] = 0;
points[1] = 0;
points[2] = 0;
points[3] = 0;

function names (){
    var x = document.getElementById("P1_name");
    var z1 = x.elements[0].value;   document.getElementById("P1_name_btn").innerHTML  = z1;
    var y = document.getElementById("P2_name");
    var z2 = y.elements[0].value;   document.getElementById("P2_name_btn").innerHTML = z2;
}

function score1 (){
    var P1_points = document.getElementById("P1_points");
    var P1_sets = document.getElementById("P1_sets");
    var P2_points = document.getElementById("P2_points");
    var P2_sets = document.getElementById("P2_sets");
    P1_points.innerHTML++;
    points[0] = P1_points.innerHTML - 1;
    points[1] = P1_sets.innerHTML;
    points[2] = P2_points.innerHTML;
    points[3] = P2_sets.innerHTML;
    check_set();
    serve_counter();
}

function score2 (){
    var P1_points = document.getElementById("P1_points");
    var P1_sets = document.getElementById("P1_sets");
    var P2_points = document.getElementById("P2_points");
    var P2_sets = document.getElementById("P2_sets");
    P1_sets.innerHTML++;
    points[1] = P1_sets.innerHTML - 1;
    points[0] = P1_points.innerHTML;
    points[2] = P2_points.innerHTML;
    points[3] = P2_sets.innerHTML;
    check_set();
    serve_counter();
}

function check_set () {
	var P1_points = document.getElementById("P1_points");
	var P1_sets = document.getElementById("P1_sets");
    if ((P1_points.innerHTML >= 11) && (P1_points.innerHTML - P1_sets.innerHTML >= 2)) {
    	var P2_points = document.getElementById("P2_points");
    	P2_points.innerHTML++;
    	P1_points.innerHTML = 0;
    	P1_sets.innerHTML = 0;
    	check_match();
    }	
    if ((P1_sets.innerHTML >= 11) && (P1_sets.innerHTML - P1_points.innerHTML >= 2)) {
    	var P2_sets = document.getElementById("P2_sets");
    	P2_sets.innerHTML++;
    	P1_points.innerHTML = 0;
    	P1_sets.innerHTML = 0;
    	check_match();
    }	
}    

function check_match () {
	var P1_points = document.getElementById("P1_points");
	var P1_sets = document.getElementById("P1_sets");
	var P2_points = document.getElementById("P2_points");
	var P2_sets = document.getElementById("P2_sets");
	var x = document.getElementById("P1_name");
    var z1 = x.elements[0].value;
    var y = document.getElementById("P2_name");
    var z2 = y.elements[0].value;
	if (P2_points.innerHTML == 3) {
        P1_points.innerHTML = 0;
        P1_sets.innerHTML = 0;
        P2_points.innerHTML = 0;
        P2_sets.innerHTML = 0; 
        var end_text = "The game has ended, " + z1 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
	}
	if (P2_sets.innerHTML == 3) {
		P1_points.innerHTML = 0;
        P1_sets.innerHTML = 0;
        P2_points.innerHTML = 0;
        P2_sets.innerHTML = 0; 
        var end_text = "The game has ended, " + z2 + " has won the game."
        document.getElementById("end_screen").innerHTML = end_text;
        var game_again = "Do you want to play again?";
        document.getElementById("new_game").innerHTML = game_again;
	} 
}

function new_game () {
	P1_points.innerHTML = 0;
    P1_sets.innerHTML = 0;
    P2_points.innerHTML = 0;
    P2_sets.innerHTML = 0;
    var new_game_text = "Have a good game!";
    document.getElementById("end_screen").innerHTML = new_game_text;
    var new_player1 = "player 1";
    var new_player2 = "player 2";
    document.getElementById("P1_name_btn").innerHTML  = new_player1;
    document.getElementById("P2_name_btn").innerHTML  = new_player2;
    document.getElementById("P1_name_change").value  = "player 1";
    document.getElementById("P2_name_change").value  = "player 2";
    document.getElementById("setP1").style.backgroundColor = "black";
	document.getElementById("setP2").style.backgroundColor = "lightgrey";
}

function serve_counter () {
    var pScore1 = Number(P1_points.innerHTML);
    var pScore2 = Number(P1_sets.innerHTML);
    var pSet1 = Number(P2_points.innerHTML);
    var pSet2 = Number(P2_sets.innerHTML);
    if ((pSet1 + pSet2) % 2 == 0){
        if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
            document.getElementById("setP1").style.backgroundColor = "black";
            document.getElementById("setP2").style.backgroundColor = "lightgrey";
        }
        else{
            document.getElementById("setP2").style.backgroundColor = "black";
            document.getElementById("setP1").style.backgroundColor = "lightgrey";
        }
    }
    else {
        if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
            document.getElementById("setP2").style.backgroundColor = "black";
            document.getElementById("setP1").style.backgroundColor = "lightgrey";
        }
        else{
            document.getElementById("setP1").style.backgroundColor = "black";
            document.getElementById("setP2").style.backgroundColor = "lightgrey";
        }
    }
}

function reset () {
    var P1_points = document.getElementById("P1_points");
    var P1_sets = document.getElementById("P1_sets");
    var P2_points = document.getElementById("P2_points");
    var P2_sets = document.getElementById("P2_sets");
    P1_points.innerHTML = points[0];
    P1_sets.innerHTML = points[1];
    P2_points.innerHTML = points[2];
    P2_sets.innerHTML = points[3];
    serve_counter();
}
