//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

let today = new Date().toISOString().split('T')[0]
console.log(today)
document.querySelector('input').max = today

document.querySelector('button').addEventListener('click', getImage)

function getImage(){
    let date = document.querySelector('input').value
    
    //get image info from NASA APOD API
    const url = `https://api.nasa.gov/planetary/apod?api_key=zZbi38fAfSeoTsYtuKHJk21DBKYcxbcIAgaSno8l&date=${date}&thumbs=true`

    //input data into DOM
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.date)
            console.log(data.title)
            console.log(data.url)

            document.querySelector('h2').innerText = `Name: ${data.title}`
            //checks if it is a video or not
            if (data.thumbnail_url === undefined){
                document.querySelector('img').src = data.url
            } else {
                document.querySelector('img').src = data.thumbnail_url
            }
            
            document.querySelector('h3').innerText = `Description: ${data.explanation}`
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}