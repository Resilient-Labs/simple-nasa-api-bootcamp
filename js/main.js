//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// Mentor Ryan Hernandez-French helped me get the structure of this project which helped me better understand the fetch structure

document.querySelector('button').addEventListener('click', getPic)


function getPic () {
const inputText = document.querySelector('input').value
console.log(inputText)
const api_url = `https://api.nasa.gov/planetary/apod`
const apiKeyParam = `?api_key=`
const myAPIKey = `9cPSUKxCVoUIpSodBcKn8d0SUqubjFTwLANgdY6V`
const dateParam = `&date=`
const dateValue = inputText
const url = api_url + apiKeyParam + myAPIKey + dateParam + dateValue


fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.hdurl
      document.querySelector('p').innerText = data.explanation 
    })
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
  }

// Parameter lets the API/sever know what specific thing you're pulling/returning
  //  It adds direction to the path  
   
// Input is telling you what street, parameter is giving you the reference (blue house)
// ApiKey + personal key is the access to get what you need
//  API Key: 9cPSUKxCVoUIpSodBcKn8d0SUqubjFTwLANgdY6V //