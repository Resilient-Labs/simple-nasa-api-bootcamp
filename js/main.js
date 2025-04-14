document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    const imageSection = document.querySelector('#imageSection')
    imageSection.innerHTML = ""
    const date = document.querySelector('input').value
    imageSection.style.border = '5px solid white';
    imageSection.style.width = '325px'
    imageSection.style.height = '325px'


    // const picture = document.querySelector('img');
    // const video = document.querySelector('iframe')

    // picture.style.border = '5px solid white';
    // picture.style.width = '325px'
    // picture.style.height = '325px'
    // video.style.border = '5px solid white';
    // video.style.width = '325px'
    // video.style.height = '325px'

    const url = `https://api.nasa.gov/planetary/apod?api_key=dzhJNQ9GCNjr9aUmrc8NFJzHtVdSxbzvm4r8aXNO&date=${date}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('#name').innerText = data.title
            document.querySelector('#description').innerText = data.explanation
            if (data.media_type === 'image' ){
                let img = document.createElement('img')
                imageSection.appendChild(img)
                img.src = data.hdurl
                // img.style.objectFit = "cover"
                // picture.style.border = '5px solid white';
                img.style.width = '100%'
                img.style.height = '100%'

                // picture.src = data.hdurl
            }else{
                let mov = document.createElement('iframe')
                imageSection.appendChild(mov)
                mov.src = data.url
                mov.style.width = '100%'
                mov.style.height = '100%'

                // video.src = data.url
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

