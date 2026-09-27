document.querySelector('#nasaImage').style.display = 'none'
document.querySelector('#nasaVideo').style.display = 'none'

document.querySelector('#searchNASA').addEventListener('click', getPicture)

function getPicture(){
    const date = document.querySelector('#date').value

    console.log(date)

    const apiKey = `xi7tKKGOum6aBcycSeyAkfd443gBmi1L9vHJUUfN`

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`

    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('#title').innerText = data.title
            document.querySelector('#description').innerText = data.explanation
            
            if(data.media_type === 'image'){
                document.querySelector('#nasaImage').src = data.hdurl
                document.querySelector('#nasaImage').style.display = 'block'
                document.querySelector('#nasaVideo').style.display = 'none'
            }else if(data.media_type === 'video'){
                document.querySelector('#nasaVideo').src = data.url
                document.querySelector('#nasaVideo').style.display = 'block'
                document.querySelector('#nasaImage').style.display = 'none'
            }
        })
        
        .catch(err => {
            console.log(`error ${err}`)
        })
}