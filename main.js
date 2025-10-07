//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('button').addEventListener('click', run); //button

//API
const API = '8nQOL6duIxwtEk97YlqaMCMHGUB8FTHmbbXt2WwN'

function run() {
    const date = document.getElementById('date').value;
    console.log(date); //date
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API}&date=${date}`;

    fetch(url) // calling nasa, with api key + user date
    .then((response) => response.json()) //getting response from data, must be processed
    .then((res) => {
        console.log(res);
        // get nasa title
        const title = res.title;
        // get nasa picture
        const pictureURL = res.url;
        // get nasa description
        const description = res.explanation;
        console.log(title, pictureURL, description);
        //add name to DOM
        document.getElementById('h2').innerText = title;
        // add description to DOM
        document.getElementById('h3').innerText = description;
        //remove images + videos from DOM
        document.getElementById('img').src = '';

        //add image to DOM, if image exists
        if (res.media_type === 'image') {
            document.getElementById('img').src = pictureURL;
        }
        // add video to DOM, if video exists
        if (res.media_type === 'video') {
            // do something
            const iframe = document.createElement('iframe'); // <iframe></iframe>
            iframe.src = pictureURL; //<iframe src='https...'></iframe>
            document.querySelector('div').appendChild(iframe);
        }
    })
    .catch((error) => 
        console.log(error));
    }


    //Sources
    //worked on with Maureen Z. 2025B and went off of template watched in Leon Lecture