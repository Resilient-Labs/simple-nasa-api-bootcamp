document.querySelector('button').addEventListener('click', getNasaPic);

function getNasaPic() {
    const userInput = document.querySelector('input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userInput}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.title;
            document.querySelector('h3').innerText = data.explanation;

            const imgElement = document.querySelector('img');
            const videoElement = document.querySelector('#vid');

            if (data.media_type === 'image') {
                imgElement.src = data.hdurl || data.url;
                imgElement.style.display = 'block';
                videoElement.style.display = 'none'; // Hide video if it's an image
            } else if (data.media_type === 'video') {
                videoElement.src = data.url;
                videoElement.style.display = 'block';
                imgElement.style.display = 'none'; // Hide image if it's a video
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
}
