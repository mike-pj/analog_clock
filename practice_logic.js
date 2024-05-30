let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();

const rotate = document.getElementById("second-hand");
const rotate2 = document.getElementById("minute-hand");
const rotate3 = document.getElementById("hour-hand");

setInterval(
     function() {
        let d = new Date();
        let second = d.getSeconds() * 6;
        let minute = d.getMinutes() * 6;
        let hour = d.getHours() * 30 + (minute / 12);

        rotate.style.transform = "rotate(" + second + "deg)";
        rotate2.style.transform = "rotate(" + minute + "deg)";
        rotate3.style.transform = "rotate(" + hour + "deg)";
        
},1000
);