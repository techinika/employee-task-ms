// Getting some HTML elements
const get_started_btn = document.querySelector(".get_started")
const login_btn = document.querySelector(".login")

const error_div = document.querySelector(".error")

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

error_div.style.display = "none"

// Specifying the Base URl
const base_url = "http://localhost:5000/auth/login"

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
    
    const error = await result.json();

    const returned_token = await error.token
    const returned_id = await error.id
    const returned_user_id = await error.user_id
    // const returned_id = await error.id

    if(returned_token){
        localStorage.setItem("access_token", returned_token)
        localStorage.setItem("dep_id", returned_id)
        localStorage.setItem("user_id", returned_user_id)
        window.location.replace("../html/emp_home.html")
    }else if(error){
        error_div.style.display = "block"
        error_div.innerHTML = error.error
        password.value = ""
        setTimeout(() => {
            error_div.style.display = "none"
        }, 3000);
    }
    
    const message = await result.json.message;


    // Creating localStorage Items to store user data temporaly
    localStorage.setItem("access_token", returned_token)

    // Redirecting user to the Employee Home page
    if(returned_token){
        window.location.replace("../html/emp_home.html")
    }
}