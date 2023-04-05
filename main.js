let iFrame = document.querySelector('iframe')
const apikey = 'jhifDJ1sBiGV53SffZmoGdtU0QDhBVzCF8dGFov7'
document.querySelector('button').addEventListener('click', () => {
    const inputValue = document.querySelector('input').value
    fetchPic(inputValue)
})
iFrame.classList.toggle('hidden')

function fetchPic(date){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation

        if(data.media_type == 'image' && iFrame.classList.contains("hidden")){
            console.log('i ran')
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type == 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').classList.toggle('hidden')
        }else if(data.media_type == 'video'){
            document.querySelector('img').src = ''
            document.querySelector('iframe').classList.toggle('hidden')
            document.querySelector('iframe').src = data.url
        }
    })
}