
document.querySelector('button'),addEventListener('click', pictureOfDay)

function pictureOfDay(){
    const userInput = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userInput}`
    fetch(url)
    .then(fun => fun.json())
    .then(data =>{
        console.log(data) 

        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation

        if(data.media_type == 'image'){
            document.querySelector('img').src = data.url
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('iframe').classList.add('hidden')
        }else{
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src =''
            document.querySelector('img').classList.add('hidden')
            document.querySelector('iframe').classList.remove('hidden')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    
}

