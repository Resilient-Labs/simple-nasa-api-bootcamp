

// document.querySelector('button').addEventListener('click', getPicOfDay)
// function getPicOfDay(){
//     const userInput = document.querySelector('input').value
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
//     const url = 'https://api.nasa.gov/'

//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             console.log(data.drinks[0].strDrink)
//             console.log(data.drinks[0].strDrinkThumb)
//             console.log(data.drinks[0].strInstructions)

//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//         console.log(`error ${err}`)
//     });
// }
//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicOfDay)

function getPicOfDay(){
    const date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=0rNQrmanYimNDHnpaI82Lny1Krw04IZXqU87KJLk&date=${date}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.title)
            console.log(data.url)
            console.log(data.explanation)
            document.querySelector('h2').innerHTML = data.title
            document.querySelector('h3').innerText = data.explanation
            if (data.media_type === 'image') {
                document.querySelector('img').classList.remove('hidden')
                document.querySelector('img').src = data.url
                document.querySelector('iframe').classList.add('hidden')
            } else {
                document.querySelector('iframe').classList.remove('hidden')
                document.querySelector('iframe').src = data.url
                document.querySelector('img').classList.add('hidden')
            }
            
        })
        .catch(err => {
        console.log(`error ${err}`)
    });
}

