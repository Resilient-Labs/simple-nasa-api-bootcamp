// Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API

// Selects id from DOM
let dateInput = document.querySelector('#button').addEventListener('click', getPicData)


// Receives date input from user and return the picture for that date & year along with the title and description.
function getPicData(){
    const inputVal = document.querySelector('#dateinput').value
    
    let url =`https://images-api.nasa.gov/search?q=${inputVal}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.collection)
    document.querySelector("h2").innerText = data.collection.items[0].data[0].title
    document.querySelector("span").innerText = data.collection.items[0].data[0].description
    document.querySelector("img").src = data.collection.items[0].links[0].href
    })
    
    .catch(err => {
       console.log(`Error somthing went wrong.`) 
    })
}

