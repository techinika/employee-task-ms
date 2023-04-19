const access_token = localStorage.getItem("access_token");
const id = localStorage.getItem("id");

console.log(access_token)

const task_title_div = document.querySelector(".task_title")
const username_div = document.querySelector(".username")
const task_desc = document.querySelector(".task_desc")
const deadline = document.querySelector(".deadline")

const unfinished_div = document.querySelector(".unfinished_div");
const fin_div = document.querySelector(".fin_div");

const logout_btn = document.querySelector(".logout")

const goto_home = document.querySelector(".goto_home")
const goto_notifications = document.querySelector(".goto_notifications")
const goto_participants = document.querySelector(".goto_participants")
const goto_settings = document.querySelector(".goto_settings")

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

// username_div.innerHTML = username

const base_url = "http://localhost:5000/ems/home/"

async function get_unfinished(){
    // if (username.value == "", phone.value == ""){ return }
    const result = await fetch(base_url + "unfinished/" + "58",{
        method: "GET",
        headers: {
            Authentication: 'Bearer ' + access_token
         },
    })
    var unfinished_tasks = await result.json();
    // var finished_tasks = await finished.json()
    console.log(unfinished_tasks)

    for(let x in unfinished_tasks) {
        var single_task = document.createElement('div')
        single_task.className = "single_task"
        var task_title = document.createElement('div')
        task_title.className = "task_title"
        task_title.innerHTML = unfinished_tasks[x].title
        var task_desc = document.createElement('div')
        task_desc.className = "task_desc"
        task_desc.innerHTML = unfinished_tasks[x].description
        var submit = document.createElement('button')
        submit.className = "submit"
        submit.innerText = "Submit task"
        var bottom_div = document.createElement('div')
        bottom_div.className = "bottom_div"
        var deadline = document.createElement('div')
        deadline.className = "deadline"
        deadline.innerHTML = "BB: " + unfinished_tasks[x].deadline.slice(0, 10)
        // var problem = document.createElement('div')
        // problem.className = "problem"
        // problem.innerHTML = "Report problem"

        unfinished_div.appendChild(single_task);
        single_task.appendChild(task_title);
        single_task.appendChild(task_desc);
        single_task.appendChild(submit);
        single_task.appendChild(bottom_div);
        bottom_div.appendChild(deadline);
        // bottom_div.appendChild(problem);
    }
}

async function get_finished(){
    const result = fetch(base_url + "finished/" + "81", {
        method: "GET",
        auth: "Bearer " + access_token,
    })
    var finished_tasks = await (await result).json();
    console.log(finished_tasks);

    for(let i in finished_tasks) {
        var task = document.createElement('div')
        task.className = "task"
        var task_title = document.createElement('div')
        task_title.className = "task_title"
        task_title.innerText = finished_tasks[i].title
        var review = document.createElement('p')
        review.className = "review"
        review.innerHTML = "Review.."
        var acc_date = document.createElement('div')
        acc_date.className = "acc_date"
        acc_date.innerHTML = "BB: " + finished_tasks[i].deadline.slice(0, 10)
    
        fin_div.appendChild(task);
        task.appendChild(task_title);
        task.appendChild(review);
        task.appendChild(acc_date);
    }
}

get_finished();
get_unfinished();