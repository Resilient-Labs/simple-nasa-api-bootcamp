 //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const button = document.querySelector('button');
button.addEventListener('click', fetchImage);


function fetchImage() {
    clearFields();
    const date = document.querySelector('input').value;
    const key = 'esAlc2MTIQ6I17IK0vssuCM6GR1RebC0nlXZKd1H';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.title;
            document.querySelector('#date').value = data.date;
            document.querySelector('p').hidden = false;
            if(data.media_type==="image"){
                const img = document.querySelector('img');
                img.hidden = false;
                img.src = data.url;
                img.alt = data.title;
            }
            else if(data.media_type==="video"){ //video 2021-06-23
                const iframe = document.querySelector('iframe');
                iframe.hidden = false;
                iframe.src = data.url;
                iframe.title = data.title;
            }
            document.querySelector('p').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


function clearFields(){
    const img = document.querySelector('img');
    const iframe = document.querySelector('iframe');

    img.src = '';
    img.hidden = true;
    iframe.src = '';
    iframe.hidden = true;
}

