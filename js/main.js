//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDate);

function getDate() {

    const date = document.querySelector('input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=M7bxU879iJlO8wjqCxmVYjvnZoufs4A61A7IhoK4&date=${date}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('h3').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`you have an error at ${err}`);
        })
}