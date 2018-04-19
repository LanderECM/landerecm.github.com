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

var points = [];
var end_table_points = [];

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
    points.push(P1_points.innerHTML);
    points.push(P1_sets.innerHTML);
    points.push(P2_points.innerHTML);
    points.push(P2_sets.innerHTML);
    P1_points.innerHTML++;
    check_set();
    serve_counter();
}

function score2 (){
    var P1_points = document.getElementById("P1_points");
    var P1_sets = document.getElementById("P1_sets");
    var P2_points = document.getElementById("P2_points");
    var P2_sets = document.getElementById("P2_sets");
    points.push(P1_points.innerHTML);
    points.push(P1_sets.innerHTML);
    points.push(P2_points.innerHTML);
    points.push(P2_sets.innerHTML);
    P2_points.innerHTML++;
    check_set();
    serve_counter();
}

function check_set () {
    var P1_points = document.getElementById("P1_points");
    var P2_points = document.getElementById("P2_points");
    if ((P1_points.innerHTML >= 11) && (P1_points.innerHTML - P2_points.innerHTML >= 2)) {
        end_table_points.push(P1_points.innerHTML);
        end_table_points.push(P2_points.innerHTML);
        var P1_sets = document.getElementById("P1_sets");
        var P2_sets = document.getElementById("P2_sets");
        P1_sets.innerHTML++;
        P1_points.innerHTML = 0;
        P2_points.innerHTML = 0;
        check_match();
    }   
    if ((P2_points.innerHTML >= 11) && (P2_points.innerHTML - P1_points.innerHTML >= 2)) {
        end_table_points.push(P1_points.innerHTML);
        end_table_points.push(P2_points.innerHTML);
        var P1_sets = document.getElementById("P1_sets");
        var P2_sets = document.getElementById("P2_sets");
        P2_sets.innerHTML++;
        P1_points.innerHTML = 0;
        P2_points.innerHTML = 0;
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
    if (P1_sets.innerHTML == 3) {
        P1_points.innerHTML = 0;
        P1_sets.innerHTML = 0;
        P2_points.innerHTML = 0;
        P2_sets.innerHTML = 0; 
        document.getElementById("popup_big").style.display = "block";
        document.getElementById("popup").style.backgroundColor = "#005BD6";
        document.getElementById("popup_big").style.backgroundColor = "#005BD6";
        document.getElementById("popup_text").innerHTML = "The game has ended, " + z1 + " has won the game.";
    }
    if (P2_sets.innerHTML == 3) {
        P1_points.innerHTML = 0;
        P1_sets.innerHTML = 0;
        P2_points.innerHTML = 0;
        P2_sets.innerHTML = 0; 
        document.getElementById("popup_big").style.display = "block";
        document.getElementById("popup").style.backgroundColor = "#005BD6";
        document.getElementById("popup_big").style.backgroundColor = "#005BD6";
        document.getElementById("popup_text").innerHTML = "The game has ended, " + z2 + " has won the game.";
    } 
    if (end_table_points.length == 6) {
        var P1_end_points1 = end_table_points[0];
        var P1_end_points2 = end_table_points[2];
        var P1_end_points3 = end_table_points[4];
        var P2_end_points1 = end_table_points[1];
        var P2_end_points2 = end_table_points[3];
        var P2_end_points3 = end_table_points[5];
        document.getElementById("set1_points").innerHTML = P1_end_points1 + ":" + P2_end_points1;
        document.getElementById("set2_points").innerHTML = P1_end_points2 + ":" + P2_end_points2;
        document.getElementById("set3_points").innerHTML = P1_end_points3 + ":" + P2_end_points3;
        document.getElementById("set4_points").innerHTML = "/";
        document.getElementById("set5_points").innerHTML = "/";
    }
    else {
        if (end_table_points.length == 8) {
            var P1_end_points1 = end_table_points[0];
            var P1_end_points2 = end_table_points[2];
            var P1_end_points3 = end_table_points[4];
            var P1_end_points4 = end_table_points[6];
            var P2_end_points1 = end_table_points[1];
            var P2_end_points2 = end_table_points[3];
            var P2_end_points3 = end_table_points[5];
            var P2_end_points4 = end_table_points[7];
            document.getElementById("set1_points").innerHTML = P1_end_points1 + ":" + P2_end_points1;
            document.getElementById("set2_points").innerHTML = P1_end_points2 + ":" + P2_end_points2;
            document.getElementById("set3_points").innerHTML = P1_end_points3 + ":" + P2_end_points3;
            document.getElementById("set4_points").innerHTML = P1_end_points4 + ":" + P2_end_points4;
            document.getElementById("set5_points").innerHTML = "/";
        }
        else {
            var P1_end_points1 = end_table_points[0];
            var P1_end_points2 = end_table_points[2];
            var P1_end_points3 = end_table_points[4];
            var P1_end_points4 = end_table_points[6];
            var P1_end_points5 = end_table_points[8];
            var P2_end_points1 = end_table_points[1];
            var P2_end_points2 = end_table_points[3];
            var P2_end_points3 = end_table_points[5];
            var P2_end_points4 = end_table_points[7];
            var P2_end_points5 = end_table_points[9];
            document.getElementById("set1_points").innerHTML = P1_end_points1 + ":" + P2_end_points1;
            document.getElementById("set2_points").innerHTML = P1_end_points2 + ":" + P2_end_points2;
            document.getElementById("set3_points").innerHTML = P1_end_points3 + ":" + P2_end_points3;
            document.getElementById("set4_points").innerHTML = P1_end_points4 + ":" + P2_end_points4;
            document.getElementById("set5_points").innerHTML = P1_end_points5 + ":" + P2_end_points5;
        }
    }
}

function new_game () {
    P1_points.innerHTML = 0;
    P1_sets.innerHTML = 0;
    P2_points.innerHTML = 0;
    P2_sets.innerHTML = 0;
    var new_player1 = "Player 1";
    var new_player2 = "Player 2";
    document.getElementById("P1_name_btn").innerHTML  = new_player1;
    document.getElementById("P2_name_btn").innerHTML  = new_player2;
    document.getElementById("P1_name_change").value  = "Player 1";
    document.getElementById("P2_name_change").value  = "Player 2";
    document.getElementById("setP1").style.backgroundColor = "#005BD6";
    document.getElementById("P1_name_change").style.backgroundColor = "#005BD6";
    document.getElementById("setP2").style.backgroundColor = "#0B6CF0";
    document.getElementById("P2_name_change").style.backgroundColor = "#0B6CF0";
    points.length = 0;
    end_table_points.length = 0;
    document.getElementById("popup_big").style.display = "none";
}

function serve_counter () {
    var pScore1 = Number(P1_points.innerHTML);
    var pScore2 = Number(P2_points.innerHTML);
    var pSet1 = Number(P1_sets.innerHTML);
    var pSet2 = Number(P2_sets.innerHTML);
    if ((pScore1 > 9) && (pScore2 > 9)) {
        if ((pSet1 + pSet2) % 2 == 0){
            if (((pScore1 + pScore2) % 2) == 0) {
                document.getElementById("setP1").style.backgroundColor = "#005BD6";
                document.getElementById("P1_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP2").style.backgroundColor = "#0B6CF0";
                document.getElementById("P2_name_change").style.backgroundColor = "#0B6CF0";
            }
            else {
                document.getElementById("setP2").style.backgroundColor = "#005BD6";
                document.getElementById("P2_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP1").style.backgroundColor = "#0B6CF0";
                document.getElementById("P1_name_change").style.backgroundColor = "#0B6CF0";
            }
        }
        else {
            if (((pScore1 + pScore2) % 2) == 0) {
                document.getElementById("setP2").style.backgroundColor = "#005BD6";
                document.getElementById("P2_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP1").style.backgroundColor = "#0B6CF0";
                document.getElementById("P1_name_change").style.backgroundColor = "#0B6CF0";
            }
            else {
                document.getElementById("setP1").style.backgroundColor = "#005BD6";
                document.getElementById("P1_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP2").style.backgroundColor = "#0B6CF0";
                document.getElementById("P2_name_change").style.backgroundColor = "#0B6CF0";
            }
        }
    }
    else {
        if ((pSet1 + pSet2) % 2 == 0){
            if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
                document.getElementById("setP1").style.backgroundColor = "#005BD6";
                document.getElementById("P1_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP2").style.backgroundColor = "#0B6CF0";
                document.getElementById("P2_name_change").style.backgroundColor = "#0B6CF0";
            }
            else{
                document.getElementById("setP2").style.backgroundColor = "#005BD6";
                document.getElementById("P2_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP1").style.backgroundColor = "#0B6CF0";
                document.getElementById("P1_name_change").style.backgroundColor = "#0B6CF0";
            }
        }
        else {
            if (((pScore1 + pScore2) % 4 == 0) || ((pScore1 + pScore2) % 4 == 1)){
                document.getElementById("setP2").style.backgroundColor = "#005BD6";
                document.getElementById("P2_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP1").style.backgroundColor = "#0B6CF0";
                document.getElementById("P1_name_change").style.backgroundColor = "#0B6CF0";
            }
            else{
                document.getElementById("setP1").style.backgroundColor = "#005BD6";
                document.getElementById("P1_name_change").style.backgroundColor = "#005BD6";
                document.getElementById("setP2").style.backgroundColor = "#0B6CF0";
                document.getElementById("P2_name_change").style.backgroundColor = "#0B6CF0";
            }   
        }
    }
}

function reset () {
    var P1_points = document.getElementById("P1_points");
    var P1_sets = document.getElementById("P1_sets");
    var P2_points = document.getElementById("P2_points");
    var P2_sets = document.getElementById("P2_sets");
    if (points.length > 0) {
        P2_sets.innerHTML = points.pop();
        P2_points.innerHTML = points.pop();
        P1_sets.innerHTML = points.pop();
        P1_points.innerHTML = points.pop();    
    }
    serve_counter();
    if ((P1_points.innerHTML && P2_points.innerHTML) == 0 && (P1_sets.innerHTML + P2_sets.innerHTML) > 0) {
        end_table_points.length = end_table_points.length - 2;
    }
}

$(document).ready(function() {
    $(window).on('orientationchange', function(event) {
        if (screen.height < screen.width){
            $(".cellFont").css({
                "font-size": "100%"
            });
            $(".cellFont1").css({
                "font-size": "50%"
            });
            $(".table").css({
                "height": "95%"
            });
        }
        else {
            $(".cellFont").css({
                "font-size": "200%"
            });
            $(".cellFont1").css({
                "font-size": "100%"
            });
            $(".table").css({
                "height": "99%"
            });
        }
    });
});
