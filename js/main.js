//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getMedia)

document.querySelector('input').addEventListener('keypress', runGetMedia)

function runGetMedia(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getMedia()
    }
    
}


function getMedia() {

    let year = document.querySelector('.year').value 
    let month = document.querySelector('.month').value
    let day = document.querySelector('.day').value
    
    let date = `${year}-${month}-${day}`

    const url = `https://api.nasa.gov/planetary/apod?api_key=c5TtvEHFlJYXztrTZ3483ECqvvbOKt1hkGOqXj4o&date=${date}`

    console.log(url);

    fetch(url) 

        .then(res => res.json ())

        .then(data => {

            console.log(data);
            console.log(data.title)
            console.log(data.url)
            console.log(data.thumbnail_url)
            console.log(data.media_type)
            console.log(data.explanation)

            document.querySelector('h2').innerText = data.title

            if(data.media_type === 'image') {

                
                document.querySelector('img').src = data.url
                document.querySelector('img').alt = ""
                document.querySelector('img').style.display = 'block'
                document.querySelector('iframe').src = ""
                document.querySelector('iframe').style.display = 'none'


            } else if (

                data.media_type === 'video') {
                document.querySelector('img').src = ""
                document.querySelector('img').style.display = 'none'
                document.querySelector('img').alt = ""
                document.querySelector('iframe').style.display = 'block'
                document.querySelector('iframe').src = data.url

            } else if (data.media_type === 'other') {

                document.querySelector('img').src = ""
                document.querySelector('img').alt = 'Media Unavailable'
                document.querySelector('iframe').src = ""
            }


            document.querySelector('h3').innerText = data.explanation


        })

        .catch(err => {
            console.log(`error ${err}`)
        });

    }

