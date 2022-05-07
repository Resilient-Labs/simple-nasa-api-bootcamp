// Enable your user to enter a date and return the picture/video of the day from NASA's API

// call function on button click
document.querySelector('button').addEventListener('click', getPicture)



function getPicture(){
    let date = document.querySelector('input').value 


    document.querySelector('img').src = ''
    document.querySelector('iframe').src = ''
    fetch(`https://api.nasa.gov/planetary/apod?api_key=FV9VuA3X0fHd7S82zPHPjTUklIqZdDxrFirsoxrc&date=${date}`)
    .then(res => res.json())
    .then(date =>{
        document.querySelector('h2').innerText = date.title
        document.querySelector('h3').innerText = date.explanation
        if(date.media_type === 'image'){
            document.querySelector('img').src = date.url
        }
        else if(date.media_type === 'video'){
            document.querySelector('iframe').src = date.url
        }else{
            alert('Unsupported Media Type')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}