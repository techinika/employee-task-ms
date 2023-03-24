// Javascript

// Selecting HTML elements

var your_dep = document.querySelector(".your_dep");
var all_part = document.querySelector(".all_part");

setInterval(()=>{
    var w = window.innerWidth;

    your_dep.style.width = w;
    all_part.style.width = w;
},100);