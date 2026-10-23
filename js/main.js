//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/ // https://science.nasa.gov/wp-json/wp/v2/apod-basic/140918


//Find the button in the HTML, when clicked, run the pressed button function. 
document.querySelector("button").addEventListener('click', pressButton)

document.querySelector('img').style.display = 'none'; //Hide img on the pre-load
document.querySelector('video').style.display = 'none'; //To hide the image/video thats on the preload of the page, because nothing is being searched as yet. 

//This function button runs when the user clicks the button. 
function pressButton() {
    // Get the date the user selected from the input.
    const dateImage = document.querySelector("input").value
    // I create the NASA API URL.
    // In a temporate literal (${dateImage}) adds the date the user selected to the URL.
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${dateImage}`;

    // Were saying go to Nasa's website and fetch us the data/information. 
    fetch(nasaUrl)
        .then(response => response.json()) //.then the response we get from NASA needs to be in json. format. 
        .then(data => { // .then 'data' is information NASA sends back to us. 

            console.log(data) // Now show data from NASA into the console. 

            // Now take title from NASA and display it inside of our h2 element in our html.
            document.querySelector('h2').innerText = data.title

            // Take the explanation from NASA and add it into our h3 element in our html. 
            document.querySelector('h3').innerHTML = data.explanation

            //If NASA returns an image... 
            if (data.media_type === 'image') {
                //Put the image from NASA into out Img element. 
                document.querySelector('img').src = data.hdurl
                // Show the image(img). 
                document.querySelector('img').style.display = 'block';
                //...But hide the video. 
                document.querySelector('video').style.display = 'none';

                // If NASA doesn't return an image, it should return a video. 
            } else if (data.media_type === 'video') {
                //To put NASA's video inthe video element. 
                document.querySelector("video").src = data.url
                //Show the video. 
                document.querySelector("video").style.display = "block"
                //...But hide the video. 
                document.querySelector("img").style.display = "none"
            }
        })
        //.catch is saying, If something goes wrong print any errors in the browswer's console to see when we get something worng. 
        .catch(err => {
            console.log(`error & ${err}`)
        })
}

