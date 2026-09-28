//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

document.querySelector('video').style.display = 'none'
document.querySelector('img').style.display = 'none'

const inputValue = document.querySelector('input')

function getPicture() {

    let input = inputValue.value

    const url = (`https://api.nasa.gov/planetary/apod?api_key=JgjnhGBrxTCd2G7zVuhMyekpW2nQBeiwFCRlxqcX&date=${input}`)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('data from NASA', data)
            if (data.media_type === "image"){
                document.querySelector('video').style.display = 'none'
                document.querySelector('img').style.display = 'block'
                document.querySelector('img').src = data.hdurl
            } else if (data.media_type === "video"){
                document.querySelector('img').style.display = 'none'
                document.querySelector('video').style.display = 'block'
                document.querySelector('video').src = data.url
            }
            document.querySelector('h2').innerHTML = data.title
            document.querySelector('#description').innerHTML = data.explanation
        })
        .catch(error => {
            alert('Please enter a date.', error)
        })

}
