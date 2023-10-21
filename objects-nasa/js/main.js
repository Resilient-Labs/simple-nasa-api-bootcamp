//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// need input in date month and year 
// needs button to click 
// fetch image from url 
// return to user a picutre of that day 


document.querySelector('button').addEventListener('click',runIt)
function runIt(){
   const selection =document.querySelector('input').value // the user input 
    // const url = ` https://api.nasa.gov/planetary/apod?api_keydate=today`
    const url =  `https://api.nasa.gov/planetary/apod?api_key=DgYlKxD5xYoH6oVHvNnfU7BtjExhX8dsKMehlD6W&date=${selection}&thumbs`//select user input from the API as specified by the user 
    fetch(url) // gets information from nasa API
    .then(response => response.json())  // its a promise or wait javascript is only  1 thread 
    .then(data => { 
       document.querySelector('h2').innerText = data.title
       document.querySelector('img').src =  data.hdurl
       document.querySelector('h3').innerText =  data.explanation
       
        console.log(data);

    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

}
//https://api.nasa.gov/












// function runIt(){
//     const selection = document.querySelector('input').value
//     const url = `https://apod.nasa.gov/apod/archivepix.htmls=${selection}`
// fetch(url)
//  .then(res => res.json()) // parse response as JSON
//  .then(data => {
//  console.log(data)
//  document.querySelector('h2').innerText = data.drinks[0].strDrink
//  document.querySelector('img').src = data.drinks[0].strDrinkThumb
//  document.querySelector('h3').innerText = data.drinks[0].strInstructions
//  })
//  .catch(err => {
//  console.log(`error ${err}`)
//  });

// }
   