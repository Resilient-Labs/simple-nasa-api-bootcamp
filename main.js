document.querySelector('button').addEventListener('click', getPicture)

//text-box
// window.onload()

function getPicture(){
    
    let getInput = document.querySelector('input').value
    
    let url = `https://api.nasa.gov/planetary/apod?api_key=MDlD32QjstSVqZg1Uk1Nyk4yqo0yeHOITaEz8Nxf&date=${getInput}`
 

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('#pic').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
        
    

}