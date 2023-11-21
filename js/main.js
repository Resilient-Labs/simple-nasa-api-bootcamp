//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getSpacePhoto)

function getSpacePhoto() {
    const userDate = document.querySelector('input').value
    const apiKey = 'V9etPVmepuWWK7WO5cadDvg7lt14iB4JbVhe7pj8'
    const url = `https://api.nasa.gov/planetary/apod?date=${userDate}&api_key=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('img').classList.add('hidden')
            console.log(data)
            // console.log(data.hdurl)
            // console.log(data.title)
            if (data.media_type == 'image') {
                document.querySelector('img').src = data.url
                document.querySelector('img').classList.toggle('hidden')


            } else if (data.media_type == 'video') {
                document.querySelector('iframe').src = data.url
                document.querySelector('iframe').classList.toggle('hidden')
            }
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
