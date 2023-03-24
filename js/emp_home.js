// Javascript

// Selecting HTML elements

// New codes
var unfinished_div = document.querySelector(".unfinished_div");
var fin_div = document.querySelector(".fin_div");

setInterval(()=>{
    var w = window.innerWidth;

    unfinished_div.style.width = w;
    fin_div.style.width = w;
},100);