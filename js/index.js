// Declaring and defining variables
const get_started_btn = document.querySelector(".get_started")
const login_btn = document.querySelector(".login")

const overlay = document.querySelector(".overlay")
const close_btn = document.querySelector(".close")
const username = document.querySelector(".username")
const password = document.querySelector(".password")

// Event listeners
get_started_btn.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.style.display = "block"
})

login_btn.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.style.display = "block"
})

close_btn.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.style.display = "none"
    username.value = ""
    password.value = ""
})