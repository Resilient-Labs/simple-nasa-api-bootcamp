const inputVal = document.querySelector('.inputVal')
document.querySelector('.btn').addEventListener('click', getNasa)

function getNasa(){
    let media = inputVal.value
    console.log(media)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=3rtLe7uNiMXhAXfz57mUoeucUkqewQKlKb6vlRSh&date=${media}`)
    .then((res) => res.json())
    .then((data) => {

        console.log('data from NASA', data)

        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation

        const img = document.querySelector('#img')
        const iframe = document.querySelector('iframe')

        if(data.media_type === 'video'){
            iframe.src = data.url
            iframe.style.display = 'block'
            img.style.display = 'none'
        }else if(data.media_type === 'image'){
            img.src = data.url
            img.style.display = 'block'
            iframe.style.display = 'none'
            iframe.src = ''
        }
    })
}