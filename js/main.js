//** What needs to happen here 
// The user should choose a date from the date input 
// The user needs to click on the button 
// There should be a connection between the index and what we need to return to the user 
// The code has to send the date to NASA
// NASA has to send back the object via our fetch api 
// the fetch request will send back the object to update our image and the explanation 
// the user should be able to view these changes  */







//a click event that calls our function 
document.querySelector('button').addEventListener('click', simpleNasaAPI)

//this holds the instructions for what happens on the click
function simpleNasaAPI() {
   
    const date = document.querySelector('input').value
    const newDateFormat = date.split('-')
    const nasaDate= newDateFormat[0].slice(2) + newDateFormat[1] + newDateFormat[2]

    const url=`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${nasaDate}`

    //this begins the fetch request to get the data from the url 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('input').value = data.date

        document.querySelector('h3').innerHTML = data.explanation

        document.querySelector('img').src = data.hdurl
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}