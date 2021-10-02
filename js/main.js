//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//function to get POTD from nasa's site
function nasaPicture(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=&date=${date}` //main URL to give access.
    //The date is acting as a parameter on the API link key


    //fetch images with API key 
    fetch(url) //method that is requesting information from the server
        .then(res => res.json()) //data has been collected -> line 12 converts the data
        .then(data => { //taking the data from the server and converting back to the browser by converting it into json
            console.log(data.hdurl)
            document.querySelector('img').src = data.hdurl
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            console.log(data)
        })
        .catch(err => {
            console.log(`error${err}`) //the action to take if there is an error
        });


    //query selector for image and replace in the html element
}

document.querySelector('button').addEventListener('click', nasaPicture)






