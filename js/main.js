//The user will enter a date. 
// Use that date to get the NASA picture of the day from that date! 
// https://api.nasa.gov/

// 1. get the date from the input when the button is clicked
// 2. make a fetch request to the NASA API using that date
// 3. get the image url from the response, and set it as the src of the img tag

document.querySelector("#getDate").addEventListener("click", nasaPhoto)

function nasaPhoto() {
    const date = document.querySelector("#date").value;
    const apiKey = "JpiwkwNIkGlcqHauuNeblnrIbp3aY8lZo7sTC8Gm";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const img = document.querySelector("#apod-image");
            const vid = document.querySelector("#apod-video");
            const result = document.querySelector(".result");
            const title = document.querySelector("#apod-title");
            const desc = document.querySelector("#apod-desc");

            if (data.media_type === "image") {
                img.src = data.hdurl;
                img.alt = data.title
                img.hidden = false;
                vid.hidden = true;   // hide iframe
            } else if (data.media_type === "video") {
                vid.src = data.url;
                vid.hidden = false;  // show iframe
                img.hidden = true;      // hide img (optional)
            }

            title.innerText = data.title;
            desc.innerText = data.explanation;

            title.hidden = false;
            desc.hidden = false;
            result.hidden = false;
        })
        .catch(error => console.error('Error fetching data:', error));
};