function timer (){
    var d = new Date ()
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();    document.getElementById("time").innerHTML =
    hours+":"+ minutes +":"+ seconds;
}
setInterval(timer, 1000);

function myFunc(){
    var x = document.getElementById("frm1");
    var y1 = x.elements[0].value
    var y2 = x.elements[1].value
        if (y1&&y2=="lander"){
        var te = "haha yes";
            document.getElementById("text").innerHTML=te;
        }
}