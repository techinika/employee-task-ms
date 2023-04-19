const username = localStorage.getItem("username");
const firstname = localStorage.getItem("firstname")
const lastname = localStorage.getItem("lastname")
const username_div = document.querySelectorAll(".username");
const firstname_div = document.querySelector(".first_name")
const lastname_div = document.querySelector(".last_name")

for (let i in username_div) {
    username_div[i].innerHTML = username
}

firstname_div.value = firstname
lastname_div.value = lastname

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
