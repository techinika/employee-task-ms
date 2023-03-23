// Javascript

// Selecting HTML elements

var close_btn = document.querySelector(".close");
var overlay = document.querySelector(".overlay");

var all = document.querySelector(".body");

var login_btn = document.querySelector(".login");
var get_started = document.querySelector(".get_started");

var username = document.querySelector(".username");
var password = document.querySelector(".password");

// Adding listeners and functions to HTML elements

login_btn.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.style.display = "block";
})

get_started.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.style.display = "block";
})

close_btn.addEventListener("click", (event) => {
    event.preventDefault();
    all.style.overflow = "scroll";
    overlay.style.display = "none";
    username.value = "";
    password.value = "";
})

