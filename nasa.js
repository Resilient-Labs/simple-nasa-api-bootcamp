document.querySelector('button').addEventListener('click', getPicture)


function getPicture(){

let dateToday = document.querySelector('input').value
let url = `https://api.nasa.gov/planetary/apod?api_key=2mbsE9vRBijvGpqJcX0CNJJcT9fSZLtW5aqjY7ai&date=${dateToday}`

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data)


    
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('img').innerText=""



    if(data.media_type ==='image'){
        document.querySelector('img').src=data.hdurl
    }
    else if(data.media_type === 'video'){
        document.querySelector('iframe').src= data.url
    }
    else{
        alert('Sorry no available media!')
    }
  
    
  
})
// .catch(err => {
//     console.log(`error ${err}`)
// });
}