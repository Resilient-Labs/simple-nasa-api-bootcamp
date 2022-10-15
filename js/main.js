//The user will enter a date. Use that date to get the NASA picture of the 
//day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let day = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=kfS8RvsMBj9brxIlwVkPV6b1JRYPBBmQ9rSPssG3${day}`)
    .then(res => res.json()) // parse response as JSON
    .then ((data) => {
     console.log(data)
     document.querySelector('h2').innerText = data.date
    document.querySelector('img').src = data.url
     document.querySelector('p').innerText = data.explanation
    })
    .catch((err) => {
     console.log(`error ${err}`)
     });
}
