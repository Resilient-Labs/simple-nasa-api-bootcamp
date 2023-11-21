//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = 'msDoF4AXrKw7hdgGSHuW14y9c41YtmD3rt1rF9iQ'
document.querySelector('button').addEventListener('click', getNasaPic)

function getNasaPic() {
    let date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    let resultsContainer = document.querySelector('#result')
    resultsContainer.innerHTML = ''
    
    if (date) {
        fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            // container to place fetch results
    
            let flexContainer = resultsContainer.appendChild(document.createElement('div'))
            flexContainer.classList.add('flexContainer')
    
            // section to add media
            let mediaContainer = flexContainer.appendChild(document.createElement('div'))
            let mediaType = data.media_type // grab media type
            mediaContainer.classList.add('media')
            
            // Picture Name
            let pictureName = mediaContainer.appendChild(document.createElement('h2'))
            pictureName.innerText = data.title // add picture name to DOM
    
    
            // have a conditional to check if there is a photo, if not use iframe and add video url
            // look at docs to see if there are other media types
            // to handle and add videos
            if (mediaType === 'video') {
                let vid = mediaContainer.appendChild(document.createElement('iframe'))
                vid.setAttribute("width", "500")
                vid.setAttribute("height", "400")
    
                vid.src = data.url
    
            } 
    
            // to handle and add images
            if (mediaType === 'image') {
                let pic = mediaContainer.appendChild(document.createElement('img'))
                pic.src = data.url
            }
    
            let summaryContainer = flexContainer.appendChild(document.createElement('div'))
            summaryContainer.classList.add('summary')
    
            let summaryHeading = summaryContainer.appendChild(document.createElement('h2'))
            summaryHeading.innerText = 'Summary'
    
            let pictureSummary = summaryContainer.appendChild(document.createElement('p'))
            pictureSummary.innerText = data.explanation // add media summary
        })
    
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
}