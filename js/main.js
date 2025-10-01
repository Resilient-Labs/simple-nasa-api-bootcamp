//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//not all dates have pictures some are videos
//key = 72NzcIXBhcCknqDprFO9S97RIo02XLHcIaPnfWec
//url = https://api.nasa.gov/planetary/apod
//check api table?
//https://apod.nasa.gov/apod/ap250922
//apod/apYrMoDy
//date is YYYY-MM-DD


document.querySelector('button').addEventListener('click',getNasaPic);

function getNasaPic() {
    const input = document.querySelector('input').value;
    //console.log(input);
    let apiKey = '72NzcIXBhcCknqDprFO9S97RIo02XLHcIaPnfWec';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.table(data);
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
        if(data.media_type = 'image') {
            document.querySelector('img').src = data.hdurl;
        }
        if(data.media_type = 'video') {
            console.log(data.url)
            document.querySelector('video').src = data.url;
        }
    })
    .catch(error => console.error(error));
}