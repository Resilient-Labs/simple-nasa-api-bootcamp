//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// main.js
//this is my api key from nasa: xIzxbiDiCn2f2bkp5EcygBWlD11BHcy5oOshPvEg

// Function for picture on input
function getNasaPicture() {
    const dateInput = document.getElementById('dateInput').value;
    const apiKey = 'xIzxbiDiCn2f2bkp5EcygBWlD11BHcy5oOshPvEg'; // Replace with your NASA API key

    // API with specific endpoints
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${dateInput}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.url)
            console.log(data.title)
            if (data.media_type === 'image') {
                const nasaImage = document.getElementById('nasaPic');
                nasaImage.src = data.url; 
                nasaImage.alt = data.title;
            } else if (data.media_type === 'video') {
                const nasaVideo = document.getElementById('nasaVideo');
                nasaVideo.src = data.url; 
                nasaVideo.alt = data.title;
            } else {
                console.error('no image or video');
            }
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(error => {
            console.error('error getting picture', error);
        });
}

// Event listener for get picture
const getPictureButton = document.getElementById('getPictureButton');
getPictureButton.addEventListener('click', getNasaPicture);


// reset button to reset window on click, so that both players don't appear if you attempt to enter a diffrent date.