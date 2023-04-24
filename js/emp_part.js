// Calling Data stored in localStorage
const access_token = localStorage.getItem("access_token");
const dep_id = localStorage.getItem("dep_id")
console.log(dep_id)

// Getting some HTML elements
const username_div = document.querySelector(".username");

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
    localStorage.removeItem("access_token")
    localStorage.removeItem("dep_id")
})

// Specifying base URL
const base_url = "http://localhost:5000/emp/participants/"

// Function of getting all participants
async function get_all_part(){
    const result = await fetch(base_url,{
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + access_token
        },
    })
    if(!result){
        window.location.replace("/")
    }
    var returned = await result.json();
    var all_participants = returned.participants
    console.log(all_participants)

    var user_details = returned.user_details
    console.log(user_details)
    username_div.innerHTML = user_details.username

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

async function your_dep_part(){
    const result = await fetch(base_url + dep_id, {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + access_token
        },
    })
    console.log(dep_id)
    var results = await result.json();
    var dep_participants = await results.dep_participants

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

get_all_part()
your_dep_part()