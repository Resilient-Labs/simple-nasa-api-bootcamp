//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getInfoOfSpecificDate)
document.querySelector('input').addEventListener('keydown', (e) => {
    if (e.code === 'Enter')
        getInfoOfSpecificDate();
})

function getInfoOfSpecificDate(){
    let date = document.querySelector('input').value;
    if (Number(date.slice(0,4)) < 1995 || Number(date.slice(0,4)) >= 1995 && (Number(date.slice(5,7)) <= 6) && (Number(date.slice(8,10)) <= 16))
                document.querySelector('#title').innerText = "Day must be after June 16th, 1995";
    else {
        let api_key = 'ngpyk4sYmyBfT3sOXwJMPRXJ43apH5p6rKCQSL14';
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);    
            document.querySelector('#title').innerText = data.title;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('#description').innerText = data.explanation;
        })
        .catch(err => console.log(`Error: ${err}`))
    }
}