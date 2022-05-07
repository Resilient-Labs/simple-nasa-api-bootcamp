
document.querySelector('button').addEventListener('click' , nasa)

function nasa(){
let date = document.querySelector('input')
document.querySelector('#date').addEventListener( 'change', nasa)
let image = document.querySelector('#pic')
let explanation = document.querySelector("#aboutPic")
const url = ('https://api.nasa.gov/planetary/apod?api_key=9mYP3NPYsJshY68Of2QipItA2ahHCThefuECqSsS&date=' + date.value)

fetch(url)

    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('#pic').src = data.url
        document.querySelector('#aboutPic').innerText = data.explanation
    })
    .catch(err => {alert("Error - couldn't find results, sorry!")
    })
    return
}
// function DateFixer(date)
// if (date === undefined || date === NaN){
//     alert('enter a date')
// }else {
//     alert('loser')
// }

