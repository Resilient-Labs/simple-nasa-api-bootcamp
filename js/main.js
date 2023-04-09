//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

let iframe = document.querySelector("iframe")
let image = document.querySelector("img")

document.querySelector('button').addEventListener('click', getDate)

function getDate() {
    let selection = document.querySelector('input').value
   
    //sting interpolation //
    const url = (`https://api.nasa.gov/planetary/apod?api_key=XQ27NoTAqWJ0jGBAeexqqzVfsdby54cyKBV5GaSZ&date=${selection}`) // template literal

    fetch(url) //fetch is requesting something from an API
        .then(res => res.json()) // parse response as JSON 
        .then(data => {

            console.log(data)
            document.querySelector('h2').innerText = data.title

            if (data.media_type == "image") {
                document.querySelector('img').src = data.url
                image.classList.remove('hidden')
                iframe.classList.add('hidden')

            } else if (data.media_type == "video") {
                document.querySelector('iframe').src = data.url
                iframe.classList.remove('hidden')
                image.classList.add('hidden')
                

            } else {
                console.log('unknown media type', data.media_type)
            }
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); //for catching errors
}

document.querySelector('button').addEventListener('click', getDate)//once clicked the function gets called
