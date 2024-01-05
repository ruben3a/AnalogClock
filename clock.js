var minutes = document.querySelector(".min");
var seconds = document.querySelector(".sec");
var hours = document.querySelector(".hours");


setInterval(function(){
    var date = new Date;
    var sec = date.getSeconds()/60 * 360 - 90;
    seconds.style.transform = "rotate("+sec+"deg)";
    var min = date.getMinutes()/60 * 360 - 90;
    minutes.style.transform = "rotate("+min+"deg)";
    var hour = date.getHours()/12 * 360 - 90;
}, 1000);