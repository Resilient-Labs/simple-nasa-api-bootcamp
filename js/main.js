

document.querySelector("#button").addEventListener('click', getDailyPicture);



function getDailyPicture(event) { 
      event.preventDefault();  //prevent the page from reloading
      let date = document.querySelector('input').value;     //set date to the value of the date input
      let url = `https://api.nasa.gov/planetary/apod?api_key=V8h2OFKe62qqYcvmOsF8oBhZMfkTRLjKJEDUCnGK&date=${date}`; //set url to the api url used in the fetch with the date variable added to the end
      fetch(url) // this will fetch the url, I have already set the url to the api url with the date variable added to the end
      .then(res => res.json()) // parse response as JSON
      .then(data => { // we will run this when the response is received
         console.log(data); // the data is being logged into the console
         let title = document.querySelector("#name") // this will set title to the h2 element in HTML
         title.innerHTML = data.title // this will set the innerHTML of the h2 element to the title of the picture from the NASA api
         let description = document.querySelector("#description") // this will set description to the h3 element in HTML
         description.innerHTML = data.explanation // this will set the innerHTML of the h3 element to the explanation of the picture from the NASA api
         let img = document.querySelector("#img") // this will set img to the img element in HTML
         img.src = data.url // this will set the src of the img element to the url of the picture from the NASA api
      })
      .catch(err => {
         console.log(`error ${err}`)  // this will log any errors if they are present
      });
}
















