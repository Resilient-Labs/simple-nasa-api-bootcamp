//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click',getNasaData)

document.querySelector('video').style.display='none'
 

function getNasaData(){
   let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=F1CBvJxPV8LpzOROolbUYnSRksmOVT6qgl95De1s&date=${date}`)
.then(res=> res.json())
.then(data => {
                console.log(data)
                 if (data.media_type === 'image') { 
                document.querySelector('img').style.display= 'block'
                  document.querySelector('video').style.display='none'

     document.querySelector('img').src = data.hdurl
    } else if (data.media_type === 'video'){ 
               document.querySelector('video').style.display='block'
                document.querySelector('img').style.display='none'

    }
                document.querySelector('h2').innerText= data.title
                 document.querySelector('#placeHere2').innerHTML= data.explanation
                document.querySelector('img').src= data.hdurl
                document.querySelector('video').src = data.url

 
})
.catch(error => {
  console.log(`error is ${error}`)
})
}


