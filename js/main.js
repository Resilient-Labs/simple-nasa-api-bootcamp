//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//alert('Works')


document.querySelector('button').addEventListener('click', getContent);
document.querySelector('video').style.display = "none"


function getContent() {
    const date = document.querySelector('.date').value
    const apiLink = `https://api.nasa.gov/planetary/apod?api_key=SCn4NERv89ag42l9R8WlWVeJPQTs5IlI7a8YH7gH
&date=${date}`
fetch(apiLink)
    .then(res => res.json())
    .then(data => {

            console.log(data);   
            // if (data.media_type ==='image') {
            //     document.queryselector('img').style.display = "block"
            //     document.queryselector('video').style.display = "none"
            // }else if(data.media_type === 'video') {
            //     document.queryselector('video').style.display = "block"
            //     document.queryselector('img').style.display = "none"
            // }   
            document.querySelector('.title').innerHTML = "Title: " + data.title
            document.querySelector('.dates').innerHTML = "The  sky on this date was: " + data.date
            document.querySelector('img').src= data.hdurl
            document.querySelector('video').src = data.url
            document.querySelector('.explanation').innerHTML = data.explanation;
            if (data.media_type ==='image') {
                document.querySelector('img').style.display = "block"
                document.querySelector('video').style.display = "none"
            }else if(data.media_type === 'video') {
                document.querySelector('video').style.display = "block"
                document.querySelector('img').style.display = "none"
            }

        })  
        .catch(err => {
            console.log(`error${err}`)
        })      
}


// data.title
// data.date
// data.exp
