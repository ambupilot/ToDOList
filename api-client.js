const API_URL = 'https://wincacademydatabase.firebaseio.com/martijn/';

// Declareer een asynchronous functie getData() met het async keyword
const getData = async function (endPoint) {
    const apiUrl = `${API_URL}${endPoint}`;
    //console.log(apiUrl);
    
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        // console.log("Response van API", res);
        const result = await res.json();
        // console.log("Before (the raw result):", result);
        let tasks = Object.keys(result).map(key => ({
            id: key,
            description: result[key].description,
            done: result[key].done
        }));
        // console.log("After the tasks array", tasks);
        return tasks;
    }   catch (error) {
        console.log(error);        
    }
}
// Item POSTEN naar API
const postItem = function(description, done) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"description":`${description}`,"done":`${done}`});

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://wincacademydatabase.firebaseio.com/martijn/tasks.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
// postItem('afwas doen', 'false') ==> werkt

// Item DELETEN van API (thanks to postman docs :-) )
const deleteItem = function(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({id:{}});
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`https://wincacademydatabase.firebaseio.com/martijn/tasks/${id}.json`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
// deleteItem('-M3zveP8HbGKfWZcdWPp') ==> werkt