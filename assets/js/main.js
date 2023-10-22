//The user will enter a date. Use that date to get the NASA picture of the day from that date!

//Add an event listener for when the user clicks the button it runs a function that performs an action 

document.querySelector('button').addEventListener('click', seeSpace)

//create an event listener on the input so if the user want to press enter to submit their date instead of clicking on the button it will also run the fucntion
document.querySelector("#date").addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        seeSpace()
    }

})

//create the see space function, this function show pull information from the NASA photo api based off the date the user entered. 
function seeSpace() {
    //create a variable to store the api url 
    const userDate = document.querySelector('input').value

    //create a variable to store the api url and make it a template literal so that when the user inputs a date, it includes it in the url
    const url = `https://api.nasa.gov/planetary/apod/?api_key=cvtjjPWAjabf7usBXZlS8fZTpOyNcE1iv3GBIChs&date=${userDate}`

    //fetch the api and console log to see the object properties 
    fetch(url)
        //return respons in JSON
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //Show date of image in the DOM+
            document.querySelector('h2').innerText = `Date Chosen: ${data.date}`

            //Show title of image/video in the DOM
            document.querySelector('h3').innerText = data.title

            document.querySelector('#description').style.backgroundColor = 'rgba(23, 10, 19, 0.5)'


            //Show explanation of image/video in the DOM
            document.querySelector('#description').innerText = data.explanation

            //Here I want to check if the data returned is either a video or an image

            if (data.media_type === "video") {
                //If the data returns as video, place data url(link) in the source of the iframe element 
                document.querySelector('iframe').src = data.url

                //If the iframe element is hidden, reveal the iframe and hide any images on the DOM
                if (document.querySelector('iframe').classList.contains('hidden')) {
                    document.querySelector('iframe').classList.remove('hidden')
                    document.querySelector('img').classList.add('hidden')
                    console.log('iframe revealed, img hidden')
                }

            } //If the data returns as image, place data url(link) in the source of the image element 
            else if (data.media_type === "image") {
                document.querySelector('img').src = data.hdurl

                //If the img element is hidden, reveal the img and hide any images on the DOM
                if (document.querySelector('img').classList.contains('hidden')) {
                    document.querySelector('img').classList.remove('hidden')
                    document.querySelector('iframe').classList.add('hidden')
                    console.log('img revealed, iframe hidden')
                }
            }

        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })

}
