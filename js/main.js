document.querySelector('button').addEventListener('click', getPictureOfTheDay)
function getPictureOfTheDay(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=TGh2kK4CR5ADNen2GuNtKqPLAZDp5ezVawih4JfA&date=${date}`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.title)
        document.querySelector('h2').textContent = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').textContent = data.explanation
    })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

/*
contributors:
shannon
alexa
miriam
david
roxana
*/