//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// video date example Feb 03, 2021

// worked with house Hayden, Cindy, Shawn, Ludjy, and Mentor Mark

const getPictuteBtn = document.querySelector('button')
let iframe = document.querySelector('iframe')
let image = document.querySelector('img')

function getPicture() {
    let selector = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=UffAxXcxXsmEWaoWmRCEOMEyWEb11nvDYEiborKv&date=${selector}`


    fetch(url) 
     .then(res => res.json()) // parse response as JSON
     .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        // date is already displayed in the input so replacing the h1 with it isn't necessary
        // document.querySelector('h1').innerText = data.date
        document.querySelector('h3').innerText = data.explanation
        if (data.media_type === "image") {
            document.querySelector('img').src = data.url
            // remove class hidden on img because we want it to be displayed if the media type is an image
            image.classList.remove('hidden')
            // we want to add the class hidden to iframe so that the space to render 
            iframe.classList.add('hidden')
        } else if (data.media_type === "video") {
            document.querySelector('iframe').src = data.url
            image.classList.add('hidden')
            iframe.classList.remove('hidden')
        } else {
            console.log("unknown media type", data.media_type)
        }
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

getPictuteBtn.addEventListener('click', getPicture)