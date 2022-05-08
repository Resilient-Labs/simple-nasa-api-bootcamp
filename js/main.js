//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)
let image = document.querySelector('img')
let video = document.querySelector('iframe')

function getPicture(){
    let pictureDate = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=ufJgdA2cgeT2Dc3ezgs6SQo2WkDtqggt259UPjJR&date=${pictureDate}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.date)
        document.querySelector('h2').innerText = data.title
        
        document.querySelector('h3').innerText = data.explanation
        if (data.media_type === 'image'){
            video.src = ''
            if (image.classList.contains('hidden')){
                image.src = data.hdurl
                image.classList.toggle('hidden')
                video.classList.toggle('hidden')
            }else{
                image.src = data.hdurl
            }
        } else if(data.media_type === 'video'){
            image.src = ''
            if (video.classList.contains('hidden')){
                video.src = data.hdurl
                video.classList.toggle('hidden')
                image.classList.toggle('hidden')
            }else{
                video.src = data.hdurl
            }
        } else{
            alert('Unsupported Media Type')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

//feb 3 2021