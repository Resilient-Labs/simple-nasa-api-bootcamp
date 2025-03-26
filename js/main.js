document.querySelector("button").addEventListener('click', getNasa);

function getNasa() {
    const inputDate = document.querySelector("input").value;
    const apiKey = "DEMO_KEY"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputDate}`

    fetch(url)
        .then( res => res.json())
        .then( data => {
            document.querySelector('h2').innerText = data.title
            document.querySelector('p').innerText = data.explanation

            console.dir(data)

            if (data.media_type === "image") {
                document.querySelector('iframe').src = ""
                document.querySelector('iframe').style.display = "none"

                document.querySelector('.nasaImage').src = data.hdurl
                document.querySelector('.nasaImage').style.display = "block"
            } 
            
            if (data.media_type === "video") {
                document.querySelector('.nasaImage').style.display = "none"
                document.querySelector('.nasaImage').src = ""

                document.querySelector('iframe').style.display = "block"
                document.querySelector('iframe').src = data.url
            }
        })
        .catch(err => console.log(err))
}


getNasa()