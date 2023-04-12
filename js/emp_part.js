// Calling Data stored in localStorage
const username = localStorage.getItem("username");
const dep_id = localStorage.getItem("dep_id")

// Getting some HTML elements
const username_div = document.querySelector(".username");
username_div.innerHTML = username

const goto_home = document.querySelector(".goto_home")
const goto_notifications = document.querySelector(".goto_notifications")
const goto_participants = document.querySelector(".goto_participants")
const goto_settings = document.querySelector(".goto_settings")

const logout_btn = document.querySelector(".logout")

const all_part = document.querySelector(".all_part");
const your_dep = document.querySelector(".your_dep")

// Adding responding to given Events
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

// Removing Data in Local storage when logged out
logout_btn.addEventListener('click', () => {
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.removeItem("firstname")
    localStorage.removeItem("lastname")
    localStorage.removeItem("email")
    localStorage.removeItem("dep_id")
    localStorage.removeItem("returned_message")

})

// Specifying base URL
const base_url = "http://localhost:3000/ems/participants/"

// Function of getting all participants
async function get_all_part(){
    const result = await fetch(base_url,{
        method: "GET",
    })
    var all_participants = await result.json();
    console.log(all_participants)

    // Creating HTML elements with paticipants data in its
    for(let x in all_participants) {
        var single_user = document.createElement('div')
        single_user.className = "single_user"
        var user_img = document.createElement('img')
        user_img.src = "../imgs/user.png"
        var user_name = document.createElement('div')
        user_name.className = "username"
        user_name.innerHTML = all_participants[x].username
        var all_names = document.createElement('div')
        all_names.className = "name"
        all_names.innerHTML = all_participants[x].firstname + " " + all_participants[x].lastname
        var user_email = document.createElement('div')
        user_email.className = "user_email"
        user_email.innerHTML = all_participants[x].email
        var depart_name = document.createElement('p')
        depart_name.className = "depart_name"
        depart_name.innerHTML = all_participants[x].name

        all_part.appendChild(single_user);
        single_user.appendChild(user_img);
        single_user.appendChild(user_name);
        single_user.appendChild(all_names);
        single_user.appendChild(user_email);
        single_user.appendChild(depart_name);
    }
}

// Function of getting all paticipants of specific department
async function your_dep_part(){
    const result = await fetch(base_url + dep_id, {
        method: "GET",
    })
    var dep_participants = await result.json();
    console.log(dep_participants)

    // Creating HTML elements with paticipants of specific department
    for(let y in dep_participants){
        var single_user = document.createElement('div')
        single_user.className = "single_user"
        var user_identity = document.createElement('div')
        user_identity.className = "user_identity"
        let user_img = document.createElement('img')
        user_img.src = "../imgs/user.png"
        var user_name = document.createElement('div')
        user_name.className = "username"
        user_name.innerHTML = dep_participants[y].username
        var user_contact = document.createElement('div')
        user_contact.className = "user_contact"
        var user_phone = document.createElement('div')
        user_phone.className = "user_phone"
        user_phone.innerHTML = dep_participants[y].firstname
        var user_email = document.createElement('div')
        user_email.className = "user_email"
        user_email.innerHTML = dep_participants[y].email
        var user_desc = document.createElement('div')
        user_desc.className = "user_desc"
        user_desc.innerHTML = "Personal description or about"
    
        your_dep.appendChild(single_user);
        single_user.appendChild(user_identity);
        user_identity.appendChild(user_img)
        user_identity.appendChild(user_name)
        single_user.appendChild(user_contact);
        user_contact.appendChild(user_phone);
        user_contact.appendChild(user_email);
        user_contact.appendChild(user_desc);
    }
}

// Running functions of getting and displaying participants
your_dep_part()
get_all_part()