const access_token = localStorage.getItem("access_token");

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
    localStorage.removeItem("dep_id")
})

const base_url = "http://localhost:5000/emp/home/"

var dep_id = localStorage.getItem("dep_id")

// async function about 

async function get_unfinished(){
    const result = await fetch(base_url + "unfinished/" + "58",{
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + access_token
         },
    })
    var returned = await result.json();
    var unfinished_tasks = await returned.unfinished

    var user_details = await returned.user_details
    user_id = await user_details.id
    console.log(user_id)

    for(let x in unfinished_tasks) {
        var single_task = document.createElement('div')
        single_task.className = "single_task"
        single_task.draggable= "true"
        single_task.id = unfinished_tasks[x].task_id
        var task_title = document.createElement('div')
        task_title.className = "task_title"
        task_title.innerHTML = unfinished_tasks[x].title
        var task_desc = document.createElement('div')
        task_desc.className = "task_desc"
        task_desc.innerHTML = unfinished_tasks[x].description
        var bottom_div = document.createElement('div')
        bottom_div.className = "bottom_div"
        var deadline = document.createElement('div')
        deadline.className = "deadline"
        deadline.innerHTML = "BB: " + unfinished_tasks[x].deadline.slice(0, 10)

        unfinished_div.appendChild(single_task);
        single_task.appendChild(task_title);
        single_task.appendChild(task_desc);
        single_task.appendChild(bottom_div);
        bottom_div.appendChild(deadline);
    }

    username_div.innerHTML = user_details.username
}

async function get_finished(){
    const result = fetch(base_url + "finished/" + "58", {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + access_token
        },
    })
    var returned = await (await result).json();
    var finished_tasks = returned.finished

    for(let i in finished_tasks) {
        var task = document.createElement('div')
        task.className = "task"
        task.draggable="true"
        task.id = finished_tasks[i].task_id
        // console.log(task.id)
        var task_title = document.createElement('div')
        task_title.className = "task_title"
        task_title.innerText = finished_tasks[i].title
        var task_desc = document.createElement('div')
        task_desc.className = "task_desc"
        task_desc.innerHTML = finished_tasks[i].description
        var deadline = document.createElement('div')
        deadline.className = "deadline"
        deadline.innerHTML = "BB: " + finished_tasks[i].deadline.slice(0, 10)
    
        fin_div.appendChild(task);
        task.appendChild(task_title);
        task.appendChild(task_desc);
        task.appendChild(deadline);
    }
}

get_finished();
get_unfinished();

function drag_and_drop() {
    var dragged, listener;

    console.clear();

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {
      return dragged = event.target;
    });

    listener("dragover", function(event) {
      return event.preventDefault();
    });

    listener("drop", async (event) => {
      event.preventDefault();
      if (event.target.className == "unfinished_div" || event.target.className == "fin_div") {
        var task_id = dragged.id
        console.log(task_id)
        if(event.target.className == "unfinished_div"){
            var result = await fetch(base_url + "update/" + task_id, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer ' + access_token,
                },
                body: JSON.stringify({
                    status_id : "2"
                })
            })
            const new_id = result.json()
            console.log(await new_id)
            dragged.id = await new_id.new_id
            dragged.className = "single_task"
        }else{
            var result = await fetch(base_url + "update/" + task_id, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer ' + access_token,
                },
                body: JSON.stringify({
                    status_id : "1"
                })
            })
            const new_id = result.json()
            console.log(await new_id)
            dragged.id = new_id.new_id
            dragged.className = "single_task"
            dragged.className = "task"
        }
        dragged.parentNode.removeChild(dragged);
        return event.target.appendChild(dragged);
      }
    });

  };

  drag_and_drop()