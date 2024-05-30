var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();
var rotate = document.getElementById("second-hand");
var rotate2 = document.getElementById("minute-hand");
var rotate3= document.getElementById("hour-hand");

setInterval(
    function() {
        d = new Date();
        console.log(d)
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        rotate.style.transform = "rotate(" + second + "deg)";
        rotate2.style.transform = "rotate(" + minute + "deg)";
        rotate3.style.transform = "rotate(" + hour + "deg)";
    }, 1000
);
