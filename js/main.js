//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const input = document.querySelector('input'); 
document.querySelector('button').addEventListener('click', getNasa);


function getNasa(){
    let media = input.value
    console.log(media)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${media}`)

    .then(res => res.json()) 
    .then(data => { 
            // console.log('data from Nasa', data); 
            display(data.url, data.title,data.explanation); 
        })
        .catch(err => console.error('Error fetching data:', err)); 

    }


function display(imagess, title, explanation){
    document.querySelector('img').src = imagess
    document.querySelector('h2').innerText = title;
    document.querySelector('h3').innerText = explanation;
}
