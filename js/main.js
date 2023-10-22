//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', checkDate)


function checkDate(){
    const date = document.querySelector('input').value
    //Get the user's date
    const userDate = new Date(date)
    // Get the current date
    const currentDate = new Date();
    // Compare the input date with the current date
    if (userDate <= currentDate) {
        getPicture(date)
    } else {
        alert('The input date is in the future. Please enter a valid date');
    }

}

function getPicture(date) {

    const iframe= document.querySelector('iframe')
    const image= document.querySelector('img')
    const apiKey= 'KE0DbnRihzUdxSqM71vtVgoLAb8V036sibkLMcAc'

    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 

        if (data.media_type === "image"){
            iframe.classList.add('hidden')
            image.classList.toggle('hidden')
            document.querySelector('img').src = data.url
            
        } else if (data.media_type === "video"){
            iframe.classList.toggle('hidden')
            image.classList.add('hidden')
            document.querySelector('iframe').src = data.url
        }

        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation

    }) 

    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}