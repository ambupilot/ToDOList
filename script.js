const getToDos = async function() {
    const data = await getData('tasks.json');
    console.log("toDos data: ", data);
    // iterate over tasks
    data.forEach(element => {
       // console.log(element.id);
       // console.log(element.description);
       // console.log(element.done);
       const tasksList = document.getElementById('tasks');
       // create li element
       const li = document.createElement('li');
       const liText = document.createTextNode(
           `${element.description}`
       );
       li.appendChild(liText);
       tasksList.append(li)

    })
}



// wachten tot DOM en alles geladen is VOOR uitvoeren
document.addEventListener("DOMContentLoaded", () => {
    // welke functies moeten worden geladen na laden:
    getToDos();
});