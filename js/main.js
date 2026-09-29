//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const inputVal = document.querySelector('.inputVal');
document.querySelector('.btn').addEventListener('click', getNasa)
document.querySelector('video').style.display = 'none';

function getNasa(){
    
    let date = inputVal.value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then((res) => res.json())
        .then((data) => {
        console.log('data from NASA', data)
        
        document.querySelector('h2').textContent = data.title;
        document.querySelector('h3').textContent = data.explanation;

        if(data.media_type === 'video'){
            document.querySelector('video').style.display = 'block';
            document.querySelector('video').src = data.url;
        }else {
            document.querySelector('video').style.display = 'none';
            document.querySelector('img').src = data.url;
        }
    })
}
