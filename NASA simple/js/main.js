//The user will enter a date. Use that date to get the NASA picture
// of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto() {
    const date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=N7brqUcnqniWezHNj1Jy132Isr2njbV3RsgVYb2U&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title



    }) 
    .catch(err => {
        console.log(`error ${err}`)
    })
}
