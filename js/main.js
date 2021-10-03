//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDrink);


function getDrink() {
    let val = document.querySelector('input').value;
    
    let img = document.querySelector('img').innerHTML;
    let desc = document.querySelector('h3').innerHTML;
    const url = `https://api.nasa.gov/planetary/apod?api_key=muu5HM86vJWios69yWXhIHoybEauiVQCtHhXEE1r&date=${val}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('h2').innerHTML = data.title;
        document.querySelector('img').src = data.url;
        document.querySelector('h3').innerHTML = data.explanation



    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })
}
