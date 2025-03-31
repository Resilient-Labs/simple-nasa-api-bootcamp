//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


// document.querySelector('button').addEventListener('click', getNasaPicture)

// function getNasaPicture(){
    
//     let nasa =  document.querySelector('input').value

//     fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + nasa) 
//         .then(res => res.json()) // parse response as JSON 
//         .then(data => { 
//             console.log(data)
//             document.querySelector('p').innerText = data.title
//             document.querySelector('h4').innerText = data.hdurl
//             document.querySelector('img').src = data.explanation
//         }) 
//         .catch(err => { 
//             console.log(`error ${err}`) 
//     }); 
// }    



// document.querySelector('button').addEventListener('click', getNasa)

// function getNasa(){

//     //retrieve value from input
//     const date = document.querySelector('input').value

//     const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date= ${date}`    //need API key

//     fetch(url)
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data)
//             document.querySelector('h2').innerText = data.title
//             document.querySelector('img').src =  data.hdurl   //it needs to be src because we're taking an image from somewhere else
//             document.querySelector('h3').innerText = data.explanation
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         })
// }


document.querySelector('button').addEventListener('click', getNasaDate)

function getNasaDate(){

    document.querySelector('iframe').src = ''
    document.querySelector('img').src = ''

    const nasaDate = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=5zjGk9dwqh6KrWSRQCqbV0RIct5n3OJKMqG0lhNn&date=${nasaDate}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //display our data
        document.querySelector('h2').innerText = data.title
        // document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
        if(data.media_type === 'image'){   //media_type is a property key of data (our JSON) and 'image' is its defined property value (check console)
            document.querySelector('img').src = data.hdurl
        }else{
            document.querySelector('iframe').src = data.hdurl
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

