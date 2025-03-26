//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)



function getPicture() {
    let keyVal = "1hEJ1f6nbNEVYSDSgWxNznxmuahVlQxhZ5cBC9rx"


    const input = document.querySelector('input').value


    let url = `https://api.nasa.gov/planetary/apod?api_key=${keyVal}&date=${input}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            
        })
        .catch(err => {
            console.log(`error ${err}`)

        })
}

