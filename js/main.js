//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getPicture)


//create function for getPicture
    //function should include taking input value
    //start with the fetch boiler plate
    //get link that will loop through apis https://api.nasa.gov/planetary/apod?api_key=5XjogFiv5KdfgrhfUz4uTRzZjFdNGW28wj6TdhNy 
        //account for user input: url date will change  based on user input use template literal
    // after setting up link, console.log to make sure that an object is being run - yes!
    //since console.log(data) works, you can grab needed elements and display them on the dom
function getPicture() {
    const userInput = document.querySelector('input').value
    const url=`https://api.nasa.gov/planetary/apod?api_key=5XjogFiv5KdfgrhfUz4uTRzZjFdNGW28wj6TdhNy&date=${userInput}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //clears if user wants to continue searching dates/pics
        document.querySelector('iframe').src = ''
        //Show title and descrip to DOM
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        //Create conditions if element is an img or vid; toggle img and iframe
        if (data.media_type == 'image') {
            document.querySelector('img').src = data.url
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('iframe').classList.remove('hidden')
        } else if (data.media_type == 'video') {
            document.querySelector('iframe').src = data.url
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('iframe').classList.remove('hidden')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
