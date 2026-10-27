//The user will enter a date. 
//Use that date to get the NASA picture of the day from that date!
//  https://api.nasa.gov/

//event listner -> click 
document.querySelector('button').addEventListener('click',getPicture)
document.querySelector('video').style.display = 'none'

//get the api -> define it first

function getPicture(){

    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=Y9hCqW35b3EaO6hgQRcrA8eM3YCxxMpNIk1HuHV7&date=${date}`
    
    fetch(url)
        .then(res => res.json())
        .then( data => {
            console.log(data)

            //if else
            if (data.media_type === 'image'){
               document.querySelector('img').style.display = 'block'
               document.querySelector('video').style.display = 'none'
            }else if (data.media_type === 'video'){
               document.querySelector('img').style.display = 'none'
               document.querySelector('video').style.display = 'block'
            }
            
            //testing if the url object output the date successfully
            //console.log(data.date)
            //document.querySelector('input').value = data.date
            //media_type: "image" 
            document.querySelector('img').src = data.hdurl
            document.querySelector('video').src = data.url
            document.querySelector('h2').textContent = data.title
            document.querySelector('h3').textContent = data.explanation
    })
    //catch error 
    .catch ( err=> {
        console.log(`error ${err}`)
    });

}


