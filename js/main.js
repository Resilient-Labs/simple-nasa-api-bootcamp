document.querySelector('.pickImage').addEventListener('click', getImage)
const input = document.querySelector('.userInput')

// async function: things that are specifiec will happen after the other
// await keyword will wait until the current line of code is executed 

function getImage() {
   console.log(input.value)
   fetch(`https://api.nasa.gov/planetary/apod?api_key=8nbaBBkeZ2fxZsU3PZM6bqoqNnn9lJnYjXP4D1jd&date=${input.value}`, {
   method: 'GET'
})
//then waits for fetch request to be done
//res=response it is a function parameter that holds a respsonse
//data is a function parameter that holds a json response 
.then(res => res.json())

.then(data => {
    let image = document.querySelector('.nasaImage')
    let video = document.querySelector('.grabVideo')
    console.log(data)
    video.src = data.url
    image.src = data.url    
})
}