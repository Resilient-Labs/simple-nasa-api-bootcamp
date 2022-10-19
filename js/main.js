//The user will enter a date. 
// Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// https://api.nasa.gov/planetary/apod?api_key=o7AxHceZnETkOhWvm8WyWbYeqv6fmQppf5tsaf5M

document.querySelector('button').addEventListener('click', getFetch)

//document query to grab user input

function getFetch(){
const userDate = document.querySelector('input').value


// go into input and grab date

//activate on click


//return name and description

fetch(`https://api.nasa.gov/planetary/apod?api_key=o7AxHceZnETkOhWvm8WyWbYeqv6fmQppf5tsaf5M&date=${userDate}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data)
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
})
.catch(err => {
    console.log(`error ${err}`)
});

} 