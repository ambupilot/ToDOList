// references:
const inputNewTask = document.getElementById('inputNewTask');
const buttonAddTask = document.getElementById('buttonAddTask');
const ulTasks = document.getElementById('tasks');
const deleteButtons = document.getElementsByClassName('deleteBtn');

const getToDos = async function() {
    const data = await getData('tasks.json');
    // console.log("toDos data: ", data);
    // iterate over tasks
    data.forEach(element => {
        //
        // console.log(element.id);
        // console.log(element.description);
        // console.log(element.done);
        const tasksList = document.getElementById('tasks');
        // create li element
        const li = document.createElement('li');
        const liText = document.createTextNode(
            `${element.description}`
        );
        // create checkbox
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.className = 'check';
        check.id = `${element.id}`;

        const deleteBtn = document.createElement('input');
        deleteBtn.type = 'image';
        deleteBtn.value = `${element.id}`
        deleteBtn.className = 'deleteBtn';
        deleteBtn.src = 'trash-delete-icon.jpg';

        li.appendChild(check);
        li.appendChild(liText)
        li.appendChild(deleteBtn)
        tasksList.append(li)

    })
}



// Function clear list (test purposes = reload after add/delete)
const emptyList = function () {
    ulTasks.querySelectorAll('li').forEach(n => n.remove())
}

// eventlistners:
buttonAddTask.addEventListener('click', function() {
   emptyList();
})

// deletebuttons: eerst array van maken
const addElToDeleteBtn = async function() {
Array.from(deleteButtons).forEach(function (btn) {
    btn.addEventListener('click', function () {
        emptyList(); // updaten naar het specifieke item uit de lijst
    })
})
}



// wachten tot DOM en alles geladen is VOOR uitvoeren
document.addEventListener("DOMContentLoaded", () => {
    // welke functies moeten worden geladen na laden:
    getToDos();
    addElToDeleteBtn();
});

/*
deleteButton.addEventListener('click', function()  {
    emptyList();
})
*/