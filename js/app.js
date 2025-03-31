document.querySelector('button').addEventListener('click', getNasa);

function getNasa() {
    const date = document.querySelector('input').value.trim();
    const url = `https://api.nasa.gov/planetary/apod?api_key=2ach9k5DUNeXDNSo1p8uz1rRkkMFVEJCHH3L3hdg&date=${date}`; // Replace DEMO_KEY with your real API key

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.querySelector('h2').innerHTML = data.title;
            document.querySelector('h3').innerHTML = data.explanation;

            if (data.media_type === "image") {
                document.querySelector('img').src = data.hdurl || data.url;
                document.querySelector('img').style.display = "block";
                document.querySelector('iframe').style.display = "none";
            } else if (data.media_type === "video") {
                document.querySelector('iframe').src = data.url;
                document.querySelector('iframe').style.display = "block";
                document.querySelector('img').style.display = "none";
            } else {
                document.querySelector('img').style.display = "none";
                document.querySelector('iframe').style.display = "none";
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            document.querySelector('h2').innerHTML = "Error fetching data";
            document.querySelector('h3').innerHTML = "Please check the date and try again.";
        });
}
