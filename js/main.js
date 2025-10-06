//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//get api key
//get date
//get user input in a varibale


//fetch request from api
//send api key and date to nasa
//willl get response from nasa -> object
//process the response json object, needs to be an json object
//do a task with response (name, pictue, and description)
//display name, picture, and description


document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto() {
    const date = document.querySelector('input').value;
    const apikey = "v7mB3lVC9bRMRxUCrki2pZ7FscW8QRkMyQ0ylaWX"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`

    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)

            if (res.media_type === "video") {
                const iframe = document.createElement('iframe')
                iframe.src = res.url
                document.querySelector('div').appendChild(iframe)
            }

            if (res.media_type === "image") {
                document.querySelector('img').src = res.hdurl
            }

            document.querySelector('h2').innerText = res.title
            document.querySelector('h3').innerText = res.explanation
        })

        .catch(err => {
            console.log(`error ${err}`)
        });


    //create conditionals. If it's an image, display it. If it's a video, use iframe.




}


