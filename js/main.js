//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//user needs to input a date 
//user clicks button - event listener to call function
//initialize function from the event listener
//INSIDE FUNCTION 
//input is attached to API URL using template literal
//API http request https://api.nasa.gov/planetary/apod?date=today
//inner HTML shows image of picture of the day
//fix the iframe 
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
    document.querySelector('h3').innerText = data.explanation

    // checking if media type is image
    // if image, don't display iframe and display block to create container for img
    // if media type is video display the iframe video and block for video container
    // data.url 
    if (data.media_type === 'image') {
      document.querySelector('img').style.display = 'block'
      document.querySelector('iframe').style.display = 'none'
      document.querySelector('img').src = data.hdurl
    } else if (data.media_type === 'video') {
      document.querySelector('img').style.display = 'none'
      document.querySelector('iframe').style.display = 'block'
      document.querySelector('iframe').src = data.url
    }
  })
  .catch(err => {
          console.log(`error ${err}`)
  })
}

// code pen moving galaxy background
const container = document.getElementById('container');

const timeToRunAnim = 5000;
let starIdx = 0;

setInterval(() => createStars(7), 100);

function createStar() {
  const starEl = document.createElement('div');
  const styleEl = document.createElement('style');
  starEl.classList.add('star');
  starEl.classList.add(`star-${++starIdx}`);
  starEl.style.animation = `moveto-${starIdx} ${timeToRunAnim}ms linear forwards`;
  
  const endX = Math.random() * 200 - 100;
  const endY = Math.random() * 200 - 100;
    
  styleEl.innerHTML += `
    @keyframes moveto-${starIdx} {
      20% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(3) translate(${endX}vw, ${endY}vh);
        opacity: 0;
      }
    }
  `;
  
  container.appendChild(starEl);
  container.appendChild(styleEl);
  
  setTimeout(() => {
    starEl.remove();
    styleEl.remove();
  }, timeToRunAnim);
}

function createStars(num) {
  for(let i=0; i<num; i++) {
    createStar();
  }
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
