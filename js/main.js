//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//user needs to input a date 
//user clicks button - event listener to call function
//initialize function from the event listener
//INSIDE FUNCTION 
//input is attached to API URL using template literal
//API http request https://api.nasa.gov/planetary/apod?date=today
//inner HTML shows image of picture of the day

//YLATMvFYwYcB9EgUvhbDgHNfCgSeN1neVEkEiYQ6 api key

// const userDateInput = document.querySelector('input').value

// const url = `https://api.nasa.gov/planetary/apod?${userDateInput}`

// fetch(url)

//console log to test api and see properties of the API
document.querySelector('button').addEventListener('click', getPicOfTheDay)

function getPicOfTheDay(){
const userDateInput = document.querySelector('input').value

fetch (`https://api.nasa.gov/planetary/apod?api_key=YLATMvFYwYcB9EgUvhbDgHNfCgSeN1neVEkEiYQ6&date=${userDateInput}`)
.then(res => res.json()) //parse response as JSON
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
})
.catch(err => {
        console.log(`error ${err}`)
});
}

//create a function where if wrong date format is enter
// use query parameters to benefits, look at documentation to see what parameters they expect, 
// conditional / function to check to see if date is written in correct format date picker is already in that format
//  && can seperate apkey = & next api




// fetch(url)
// .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         //used console.log to see what is inside the properties of the API - found strDrink : margarita and found img and found ingredients
//         //very first property was called "drinks" and it was in the first array meaning [0]
//       document.querySelector('h2').innerText = data.drinks[0].strDrink
//       document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[0].strInstructions
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
// });
// }
