y1.innerHTML = 0;
var y2 = document.getElementById("y2");
y2.innerHTML = 0;
}

var Points = new Array(4);
Points[0] = 0;
Points[1] = 0;
Points[2] = 0;
Points[3] = 0;

function names (){
    var x = document.getElementById("n1");
    var z1 = x.elements[0].value;   document.getElementById("name1").innerHTML  = z1;
    var y = document.getElementById("n2");
    var z2 = y.elements[0].value;    document.getElementById("name2").innerHTML = z2;
}

function score1 (){
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    x1.innerHTML++;
    Points[0] = x1.innerHTML - 1;
    Points[1] = x2.innerHTML;
    Points[2] = y1.innerHTML;
    Points[3] = y2.innerHTML;
    check_set();
    serve_counter();
}

function score2 (){
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    x2.innerHTML++;
    Points[1] = x2.innerHTML - 1;
    Points[0] = x1.innerHTML;
    Points[2] = y1.innerHTML;
    Points[3] = y2.innerHTML;
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
}

function serve_counter () {
    var pScore1 = Number(x1.innerHTML);
    var pScore2 = Number(x2.innerHTML);
    var pSet1 = Number(y1.innerHTML);
    var pSet2 = Number(y2.innerHTML);
    if ((pSet1 + pSet2) % 2 == 0){
        if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
            document.getElementById("setP1").style.backgroundColor = "blue";
            document.getElementById("setP2").style.backgroundColor = "red";
        }
        else{
            document.getElementById("setP2").style.backgroundColor = "blue";
            document.getElementById("setP1").style.backgroundColor = "red";
        }
    }
    else {
        if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
            document.getElementById("setP2").style.backgroundColor = "blue";
            document.getElementById("setP1").style.backgroundColor = "red";
        }
        else{
            document.getElementById("setP1").style.backgroundColor = "blue";
            document.getElementById("setP2").style.backgroundColor = "red";
        }
    }
}

function reset () {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    x1.innerHTML = Points[0];
    x2.innerHTML = Points[1];
    y1.innerHTML = Points[2];
    y2.innerHTML = Points[3];
}
