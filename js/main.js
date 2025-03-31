const button = document.querySelector('button')
button.addEventListener('click', search)
function search() {
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=bNf3wLBhgS7LbxkKCUt2W6eMh2PwjeDyJtZ0ZmNh'
    let input = document.querySelector('input')
    let name = document.querySelector('h2')
    let image = document.querySelector('img')
    let desc = document.querySelector('h3')
    let video = document.querySelector('iframe')
    const url = baseUrl + '&date=' + input.value
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            name.innerText = data.title
            desc.innerText = data.explanation
            if (data.url) {
                video.src = data.url
            } else {
                image.src = data.hdurl
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}