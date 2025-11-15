//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//Adding event listner to the click for user to get media after clicking
//creating variables for the apiKey, url and the input
//creating a function for the click
//fetching data sent through json from the API
//displaying data as images and videos to the DOM
//catching all errors that might occur

document.querySelector('button').addEventListener('click', getMedia)

function getMedia(){
  const inputDate = document.querySelector('input').value
  const key = "HqPJ0dK005YQ1bullOzBhiUTeku7j1QF92t0o9pp"
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inputDate}`

  //fetch function 
  fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = data.title

//displaying image

        if(data.media_type === "image"){
            document.querySelector('img').src = data.url
            document.querySelector('img').style.display = 'block';
            document.querySelector('iframe').style.display = 'none';
            document.querySelector('h3').innerText = data.explanation;
        }
 //displaying a video

        else if(data.media_type === "video"){
            document.querySelector('iframe').src = data.url
            document.querySelector('img').style.display = 'none';
            document.querySelector('iframe').style.display = 'block';
            document.querySelector('h3').innerText = data.explanation;
        }
    })

    .catch(error => console.error(error));  //console the error if there is an error
}

    


