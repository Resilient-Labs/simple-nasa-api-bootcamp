//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector("button").addEventListener("click", getNasaPic)

function getNasaPic() {
    let selection = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=[Key]&date=${selection}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.title == undefined) {
                document.querySelector("h2").innerText = "Enter Valid Date" //checks for dates past current date
                document.querySelector("h3").innerText = ""
                document.querySelector("img").src = ""
            } else {
                document.querySelector("h2").innerText = data.title
                document.querySelector("h3").innerText = data.explanation
                document.querySelector("img").src = data.url
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
