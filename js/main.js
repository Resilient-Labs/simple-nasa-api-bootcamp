//The user will enter a date. Use that date to get the NASA picture of the 
//day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

//separate query parameters by ampersand
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}

function getPicture(){
    let day = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=keMl5NT9jf2XUoy9dr4YuZKO5fqSUMe3r42x6emH&date=${day}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    // data.date = day
    console.log(data)
    if(data.copyright === undefined && data.explanation === undefined){
        document.querySelector('h2').innerText = ''
        document.querySelector('span').innerText = 'Incorrect date format'
    }else if(data.copyright === undefined){            
        document.querySelector('h2').innerText = 'No name listed'
    }else{
        document.querySelector('h2').innerText = `by ${data.copyright}`
        document.querySelector('span').innerText = ''
    }

    document.querySelector('img').src = data.hdurl

    if(data.explanation === undefined){
        document.querySelector('p').innerText = ' '
    }else{
        document.querySelector('p').innerText = data.explanation
    }
    
    // document.querySelector('img').src = data.drinks[drinkNumber].strDrinkThumb
    // document.querySelector('h3').innerText = data.drinks[drinkNumber].strInstructions

    })
    .catch(err => {
    console.log(`error ${err}`)
    });
}




// function getDrink(){
//     const drink = document.getElementById('drinkInput').value
//     const drinkNumber = document.getElementById('drinkNumber').value

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//     console.log(data.drinks[drinkNumber])
//     document.querySelector('h2').innerText = data.drinks[drinkNumber].strDrink
//     document.querySelector('img').src = data.drinks[drinkNumber].strDrinkThumb
//     document.querySelector('h3').innerText = data.drinks[drinkNumber].strInstructions

//     })
//     .catch(err => {
//     console.log(`error ${err}`)
//     });
// }