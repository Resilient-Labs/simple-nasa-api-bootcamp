document.querySelector('button').addEventListener('click', nasa)


function nasa (){
    let userInput = document.querySelector('input').value
    console.log(userInput)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=K4T4QLXJD5IS832xhi7YmpgJOkXKCAuwsoAGcuwN&date=${userInput}`)
     .then(response => response.json())
     .then(data => {
        console.log(data)

        document.querySelector('h2').innerHTML = data.date
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerHTML = data.explanation
    
     })

}

nasa ()

