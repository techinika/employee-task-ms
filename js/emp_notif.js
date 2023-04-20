const access_token = localStorage.getItem("access_token");
const username_div = document.querySelector(".username");

// username_div.innerHTML = username
const goto_home = document.querySelector(".goto_home")
const goto_notifications = document.querySelector(".goto_notifications")
const goto_participants = document.querySelector(".goto_participants")
const goto_settings = document.querySelector(".goto_settings")

const logout_btn = document.querySelector(".logout")

goto_home.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.replace("../html/emp_home.html")
})
goto_notifications.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.replace("../html/emp_notif.html")
})
goto_participants.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.replace("../html/emp_part.html")
})
goto_settings.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.replace("../html/emp_setting.html")
})
logout_btn.addEventListener('click', () => {
    localStorage.removeItem("access_token")
})

const base_url = "http://localhost:5000/emp/participants/"

async function get_all_notif(){
    const result = await fetch(base_url,{
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + access_token
        },
    })
    var returned = await result.json();

    var user_details = returned.user_details
    console.log(user_details)
    username_div.innerHTML = user_details.username
}
get_all_notif()