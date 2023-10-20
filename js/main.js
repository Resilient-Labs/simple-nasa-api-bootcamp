//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getPic)

function getPic(){

    // this takes the user input and stores it into the variable selection
    const selection = document.querySelector('input').value
    
    // we then store the url with the temporal literal selection variable holding the user input in another variable called url
    // using nasa api
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selection}`

    // we then fetch data from the url
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        //here we access the data date and display it in our h1
        document.querySelector('h1').innerText = data.date

        //here we access the data title and display it in our h2
        document.querySelector('h2').innerText = data.title

        //here we access the data image and display it in our img
        document.querySelector('img').src = data.hdurl

        //here we access the data explanation and display it in our h3
        document.querySelector('h3').innerText = data.explanation
    })
    //error catcher
    .catch(err => {
        console.log(`error ${err}`)
});
}