document.querySelector("button").addEventListener("click", getInfo)
function getInfo() {

const date = document.querySelector("input").value
    console.log(date)

const url = `https://api.nasa.gov/planetary/apod?api_key=GEBhgfy7MceFdrSe9usnq8qBgxL0bYRuGbtchdg8&date=${date}`

    fetch(url)
        .then(res => res.json())
        .then(data => {

        console.log(data)

        document.querySelector("h2").textContent = data.title
        document.querySelector("img").src = data.hdurl
        document.querySelector("p").textContent = data.explanation
 })
        .catch(err => {
            console.log(`error ${err}`)
        });
}