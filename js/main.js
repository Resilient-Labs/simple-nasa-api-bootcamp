//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDate) 

function getDate(){
    let selection = document.querySelector('input').value
const url = `https://api.nasa.gov/planetary/apod?api_key=XQ27NoTAqWJ0jGBAeexqqzVfsdby54cyKBV5GaSZ&date=${selection}` 


fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
    document.querySelector('h2').innerText = data.title 
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('img').src = data.url 
    })
    .catch(err => {
        console.log(`error ${err}`) 
})
}