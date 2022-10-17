document.querySelector('.pickImage').addEventListener('click', getImage)
const input = document.querySelector('.userInput')

//got help with this function from Suf

function getImage() {
    console.log(input.value)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=3Z3EJ0r5OzJzUbn20a5hrdQvfexFsrkfJVL6jiCk&date=${input.value}`, {
        method: 'GET',
    })
        .then(res => res.json())
        //must have this to every call. this converts the API into something readable to JS
        //data is a function parameter that holds a json response

        // whats in the parameter is taking all the data from the api
        .then(data => {
            let image = document.querySelector('.optImage')
            let video = document.querySelector('.optVideo')
            console.log(data)
            image.src = data.url
            video.src = data.url
        })
    // .catch(err => {
    // console.log(`error ${err}`)
    // })
}