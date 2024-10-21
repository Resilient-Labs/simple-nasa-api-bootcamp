//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getNASAPicOfDay)


function getNASAPicOfDay() {

    const userInput = document.querySelector('input').value
    console.log(userInput)

    const url = `https://api.nasa.gov/planetary/apod?api_key=h4DkxXhitiiuHFqFfG3fvCcdulgFV0b8IjzPAubB&date=${userInput}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    
        displayOnDOM(data)
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}




// h4DkxXhitiiuHFqFfG3fvCcdulgFV0b8IjzPAubB -api key


function displayOnDOM(data) {
    
    if(data.title) {
        document.querySelector('span').innerText = data.title
        document.querySelector('p').innerText = data.explanation
    
        //assisted by Mike Pennisi in community hours + Franceska
    
        if(data.media_type === 'video') {
            document.querySelector('img').src = ''
    
            document.querySelector('iframe').classList.remove('hidden')
            document.querySelector('iframe').src = data.url
    
        }else if(data.media_type === 'image') {
            document.querySelector('img').src = data.url
    
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('iframe').src = ''
        }
    }else {
        document.querySelector('iframe').classList.add('hidden')
        document.querySelector('img').classList.add('hidden')
        document.querySelector('span').innerText = ''
        document.querySelector('p').innerText = 'Please enter current or previous date.'
        document.querySelector('img').src = ''
        document.querySelector('iframe').src = ''
    }
}