//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
https://api.nasa.gov/

document.querySelector('button').addEventListener('click', changePhoto)

function changePhoto() {

    const date = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=CLr2Kx5thL9c5zWcK2u24ellxu3VKOdOoUn2lrXt&date=${date}`
    // Variable that holds API

    fetch(url) // connect to API
    .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
    .then(data => { // Outputting a series of things
        console.log(data.date) // You use .message to specify you want the message property
        console.log(data.url)
        console.log(data.explanation)
        console.log(data.title)
        console.log(data.media_type)
        
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation

        if (data.media_type === 'image'){
            document.querySelector('img').src= data.url
            document.querySelector('iframe').style.display = 'none';
        } else {
            document.querySelector
            document.querySelector('iframe').src= data.url
            document.querySelector('img').style.display = 'none';
        }

    })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });

}

/*

date: 
"2018-07-22"

explanation: 
"What is our universe made of? To help find out, ESA launched the Planck satellite from 2009 to 2013 to map, in unprecedented detail, slight temperature differences on the oldest optical surface known -- the background sky when our universe first became transparent to light. Visible in all directions, this cosmic microwave background is a complex tapestry that could only show the hot and cold patterns observed were the universe to be composed of specific types of energy that evolved in specific ways. The final results, reported last week, confirm again that most of our universe is mostly composed of mysterious and unfamiliar dark energy, and that even most of the remaining matter energy is strangely dark. Additionally, the \"final\" 2018 Planck data impressively peg the age of the universe at about 13.8 billion years and the local  expansion rate -- called the Hubble constant -- at 67.4 (+/- 0.5) km/sec/Mpc. Oddly, this early-universe determined Hubble constant is slightly lower than that determined by other methods in the late-universe, creating a tension that is causing much discussion and speculation."

hdurl: 
"https://apod.nasa.gov/apod/image/1807/CMB2018_Planck_4672.jpg"

media_type: 
"image"

service_version: 
"v1"

title: 
"Planck Maps the Microwave Background"

url: 
"https://apod.nasa.gov/apod/image/1807/CMB2018_Planck_1080.jpg"

*/



// Type a date in the input
// That date is taken then matched with an API date
// API date returns a photo based on that day




// video, social media, music