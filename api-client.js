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