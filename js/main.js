//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//not all dates have pictures some are videos
//key = 72NzcIXBhcCknqDprFO9S97RIo02XLHcIaPnfWec
//url = https://api.nasa.gov/planetary/apod
//check api table?
//https://apod.nasa.gov/apod/ap250922
//apod/apYrMoDy
//date is YYYY-MM-DD

let clicked = false;
let amImage = false;
document.querySelector('button').addEventListener('click',getNasaPic);

function getNasaPic() {
    let clicked = true;
    const input = document.querySelector('input').value;
    const iFrame = document.getElementById('frame');
    //console.log(input);
    let apiKey = '72NzcIXBhcCknqDprFO9S97RIo02XLHcIaPnfWec';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`;
    if(clicked) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
        console.table(data);
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
        if(data.media_type == 'image') {
            iFrame.style.visibility = 'hidden';
            amImage = true;
            document.querySelector('img').src = data.hdurl;
            clicked = false;
        }
        if(data.media_type = 'video') {
            console.log(data.url)
            document.querySelector('iframe').src = data.url;
            clicked = false;
        }
        if(data.media_type = 'video' && amImage) {
            amImage = false;
            document.querySelector('iframe').src = data.url;
            clicked = false;
        }
    })
    .catch(error => console.error(error));
    }
}

//need to clear previous content to make way for new content so the user doesn't have to refresh
//maybe add a 'today' button to autofill