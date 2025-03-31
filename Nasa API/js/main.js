//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/ we need a query paramenter to find the date
document.querySelector('button').addEventListener('click', getNasa)

function getNasa() {
    const inputDate = document.querySelector('input').value // retrieves the value from the input

    const url = `https://api.nasa.gov/planetary/apod?api_key=zuuKoqjzY7N5K8j9dCrrZInI6DO0DFFuztvcwgvf&date=${inputDate}` // Reference the api to retrieve the information API key & sign then date with the refrence of value

fetch(url) //reaching out to URL
    .then(res => res.json()) //Information is sent back in the JSON Format
    .then(data => { //Data is then sent to the console.
        console.log(data)
        document.querySelector('h2').innerHTML = data.title; //The title of  the image is placed in the html tag
        document.querySelector('img').src = data.hdurl; //The image is loaded into the html tag
        document.querySelector('h3').innerHTML = data.explanation; //The explanation of the image is placed in the html tag. 
    })

    .catch(err => { //if there is an error, the error will be placed in the console
        console.log(`error ${err}`)

    });

}

document.querySelector('button').addEventListener('click', getNasa)

function getNasa() {
    const inputDate = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=zuuKoqjzY7n5k8j9dCrrZInI6DO0DFFuztvcwgvf&date=${inputDate}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerHTML = data.title;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('h3').innerHTML = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
