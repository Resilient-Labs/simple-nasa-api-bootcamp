//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// get API key : YeDNVZCH171DCwJRsGOCCqScqwAeamjjEwJJ8dll
// User will pass in date

// get the user input & store that in a variable (in HTML ?)
// fetch request (sending API Key & date to NASA)
// get response from NASA (usually responnse will be an object)
// process the response -> format needs to be a JSON object
// so something with the response/data (in this case, use the date to get NASA image of the day)
// get name, picture, description
// display name, pic & description in page
// add event listener for buttin onclick

document.querySelector('button').addEventListener('click', getImage);


function getImage() {

    const input = document.querySelector('input').value;
    const apikey = 'YeDNVZCH171DCwJRsGOCCqScqwAeamjjEwJJ8dll'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${input}`
    // console.log(input);


    fetch(url)
        .then((res) => res.json())
        .then(res => {
            console.log(res)

            //  check media type to see if it's an image or video. Use conditionals. If it's a video use iframe.

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
        })


    // 

}

