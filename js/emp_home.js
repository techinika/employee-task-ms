// Javascript

// Selecting HTML elements

var home = document.querySelector(".home");
var home_nav = document.querySelector("#home_nav");

var notifications = document.querySelector(".notifications");
var notifications_nav = document.querySelector("#notif_nav");

var participants = document.querySelector(".participants");
var participants_nav = document.querySelector("#part_nav");

var profile_settings = document.querySelector(".profile_settings");
var settings_nav = document.querySelector("#setting_nav");

// Adding listeners and functions to HTML elements

notifications_nav.addEventListener("click", ()=>{
    home.style.display = "none";
    participants.style.display = "none";
    profile_settings.style.display = "none";
    notifications.style.display = "block";

    home_nav.style.backgroundColor = "var(--background-secondary)";
    participants_nav.style.backgroundColor = "var(--background-secondary)";
    settings_nav.style.backgroundColor = "var(--background-secondary)";
    notifications_nav.style.backgroundColor = "var(--primary-color)";

    console.info("notifications");
})

participants_nav.addEventListener("click", ()=>{
    home.style.display = "none";
    participants.style.display = "block";
    profile_settings.style.display = "none";
    notifications.style.display = "none";

    home_nav.style.backgroundColor = "var(--background-secondary)";
    participants_nav.style.backgroundColor = "var(--primary-color)";
    settings_nav.style.backgroundColor = "var(--background-secondary)";
    notifications_nav.style.backgroundColor = "var(--background-secondary)";

    console.info("participants");
})

setting_nav.addEventListener("click", ()=>{
    home.style.display = "none";
    participants.style.display = "none";
    profile_settings.style.display = "block";
    notifications.style.display = "none";

    home_nav.style.backgroundColor = "var(--background-secondary)";
    participants_nav.style.backgroundColor = "var(--background-secondary)";
    settings_nav.style.backgroundColor = "var(--primary-color)";
    notifications_nav.style.backgroundColor = "var(--background-secondary)";

    console.info("settings");
})

home_nav.addEventListener("click", ()=>{
    home.style.display = "block";
    participants.style.display = "none";
    profile_settings.style.display = "none";
    notifications.style.display = "none";

    home_nav.style.backgroundColor = "var(--primary-color)";
    participants_nav.style.backgroundColor = "var(--background-secondary)";
    settings_nav.style.backgroundColor = "var(--background-secondary)";
    notifications_nav.style.backgroundColor = "var(--background-secondary)";

    console.info("home");
})