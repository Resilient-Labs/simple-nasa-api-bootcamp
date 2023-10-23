let image = document.querySelector('img')
let iframe = document.querySelector('iframe')

let title = document.querySelector('h2')
let explanation = document.querySelector('p')

let date = document.querySelector('input')
date.max = new Date().toLocaleDateString('fr-ca') // Limit date input to user's current date

date.addEventListener('change', getPicture)

function getPicture() {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=CbCNB79iSj59SMpIbdRmre0fMehgPN8DdfZuGXfU&date=${date}`)
    .then(res => res.json())
    .then(data => {
        if (data.media_type == 'image') {
            image.classList.remove('hidden') // Show current image
            iframe.classList.add('hidden') // If previous was iframe, hide it
            image.src = data.hdurl
        }
        else {
            iframe.classList.remove('hidden') // Show current iframe
            image.classList.add('hidden') // If previous was image, hide it
            iframe.src = data.url
        }
        title.innerText = data.title
        explanation.innerText = data.explanation
    })

    .catch(err => {
        console.log(`error ${err}`)
        title.innerText = "Something went wrong"
        explanation.innerText = "Please try again :^("
    })
}