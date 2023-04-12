// Getting som HTML elements
const get_started_btn = document.querySelector(".get_started")
const login_btn = document.querySelector(".login")

const overlay = document.querySelector(".overlay")
const close_btn = document.querySelector(".close")
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const submit_btn = document.querySelector(".submit")

// Adding and responding to given Listeners
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

submit_btn.addEventListener("click", post_info)

// Specifying the Base URl
const base_url = "http://localhost:3000/auth"

// Function of verifying user credentials 
async function post_info(e){
    e.preventDefault()
    const result = await fetch(base_url,{
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    
    const message = await result.json();
    if(!message.returned){
        return
    }

    // Creating localStorage Items to store user data temporaly
    localStorage.setItem("id", await message.returned.id)
    localStorage.setItem("username", await message.returned.username)
    localStorage.setItem("password", await message.returned.password)
    localStorage.setItem("firstname", await message.returned.firstname)
    localStorage.setItem("lastname", await message.returned.lastname)
    localStorage.setItem("email", await message.returned.email)
    localStorage.setItem("dep_id", await message.returned.dep_id)

    // Redirectin user to the Employee Home page
    window.location.replace("../html/emp_home.html")
}