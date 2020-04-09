// references:
const inputNewTask = document.getElementById('inputNewTask');
const buttonAddTask = document.getElementById('buttonAddTask');
const ulTasks = document.getElementById('tasks');
const deleteButtons = document.getElementsByClassName('deleteBtn');

const getToDos = async function() {
    const data = await getData('tasks.json');
    emptyList(); //start clean
    // iterate over tasks
    data.forEach(element => {
        // console.log(element.id);
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
        // create deletebutton
        const deleteBtn = document.createElement('input');
        deleteBtn.type = 'image';
        deleteBtn.value = `${element.id}`
        deleteBtn.className = 'deleteBtn';
        deleteBtn.src = 'trash-delete-icon.jpg';
        // add to list
        li.appendChild(check);
        li.appendChild(liText)
        li.appendChild(deleteBtn)
        tasksList.append(li)

    })
}

// functies die een todo toevoegen en verwijderen:
// postItem(description, done) => post item
// deleteItem(id) => delete item (!! met het meegegeven id token)

// na klikken op deknop 'add' moet inputfield worden gepakt en naar de functie postItem() worden verzonden
// eventlistners:
inputNewTask.addEventListener('change', function(e) {
    console.log(e.target.value);
    let inputText = e.target.value;
    inputToAdd(inputText)
} )


inputToAdd = function(text) {
    buttonAddTask.addEventListener('click', function(e) {
        let knop = e.target.value;
        console.log("je klikt op: ", knop);
        console.log(text);
        postItem(text, false)
        setTimeout(function(){
            location.reload();
         }, 1000)
        })
}

// Function clear list (not db, alleen op DOM)
// (test purposes EN voor  reload after add/delete)
const emptyList = function () {
    ulTasks.querySelectorAll('li').forEach(n => n.remove())
}

console.log('deleteButtons voor array.from: ', deleteButtons);

//console.log(Array.from("array from output: ",deleteButtons));

const deleteIcons = function() {
    return Array.from(deleteButtons);
}
console.log('deleteButtons -> deleteIcons NA array from: ',deleteIcons());
// empty. Na renderen van de pagina WEL opvraagbaar in de console

/*
    deleteButtons.forEach(function (knop) {
        knop.addEventListener('click', function(e) {
            console.log(e.value);
        })
    })



//console.log(deleteButtons);
/*
    Array.from(deleteButtons).forEach(function (knop) {
        knop.addEventListener('click', function(e) {
            //let knopId = e.target.id;
            console.log(e.value);
            
        })
    })
    // addEventListner('click', function () {
        // let knopId = e.target.id
        // console.log(knopId);
        // deleteItem(knopId)
        
  //  })

*/


// wachten tot DOM en alles geladen is VOOR uitvoeren
document.addEventListener("DOMContentLoaded", () => {
    // welke functies moeten worden geladen na laden:
    getToDos();
});