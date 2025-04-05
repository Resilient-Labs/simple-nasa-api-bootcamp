//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const key = "PrE6I6cFFvLzbyqeq4Pao9CLLKRfNt9gH40fbs6D"
document.querySelector("button").addEventListener("click", getPicture)

// Testing: How to determine what data is being obtained? console.log(data)

function getPicture() {
    let date = document.querySelector("input").value
    document.querySelector("iframe").src = ""
    document.querySelector("img").src = ""
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector("h4").innerText = data.title
            if(data.media_type === "image"){
                document.querySelector("img").src = data.hdurl
             } else {
                 document.querySelector("iframe").src = data.url
                 document.querySelector("iframe").classList.remove("hidden")
            }
            document.querySelector("p").innerText = data.explanation
        })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

//can use demo key to practice but limited since it tracks IP address usage