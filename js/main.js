//The user will enter a date. Use that date to get the NASA picture of the day from that date! 

//user enters date

//date is found in the api

//user clicks get picture

//that dates photo and descriptions returns in the DOM

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){

    const userDate = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=TSc3jxZ2OogRjqmwnazxq0TkH9ybQLxO3h01aow6&date=${userDate}`
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data.title)
            document.querySelector('h2').innerText = data.title
            console.log(data.url)
            document.querySelector('img').src = data.url
            console.log(data.explanation)
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err =>{
            console.log(`error ${err}`)
        })
}

