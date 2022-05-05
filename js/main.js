//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
'https://api.nasa.gov/planetary/apod?date=YYYY-MM-DD&api_key=yxp9BvlaVyaQ6JOgW33a4z9RONtfWeF2F7gDwurF'

document.querySelector('button').addEventListener('click', findPic)

function findPic(){
    let daDate = document.querySelector('input').value
    console.log(daDate)

    let url = `https://api.nasa.gov/planetary/apod?date=${daDate}&api_key=yxp9BvlaVyaQ6JOgW33a4z9RONtfWeF2F7gDwurF`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
        console.log(data) 
      
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.url
            document.querySelector('iframe').src = ''
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src = ''
        }else{
            document.querySelector('span').innerText = 'Unsupported media type'
        }

    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}