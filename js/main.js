//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov

// On page start make sure that both image and video are hiding
document.querySelector('img').style.display = 'none';
document.querySelector('video').style.display = 'none';

const pickDate = document.querySelector('.pickDate');

document.querySelector('.onlyBtn').addEventListener('click', krabyPatty);

function krabyPatty() {
    
    let thisValue = pickDate.value;
    console.log(thisValue);

    let damnDate = thisValue.replaceAll('-','').slice(2);
    console.log(damnDate);

    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${damnDate}`)
    .then(response => response.json())
    .then((data) => {
        console.log('Data from NASA', data)

        document.querySelector('h2').innerText = data.title;

        document.querySelector('h3').innerText = data.alt
//      Conditional for image or video

        if (data.media_type === 'video') {
            let basicHTML = data.basic_html;
            let parser = new DOMParser();

            let doc = parser.parseFromString(basicHTML, 'text/html');
            let videoFile = doc.querySelector('source').src; 

            document.querySelector('video').src = videoFile;
            document.querySelector('video').style.display = 'block';
            document.querySelector('img').style.display = 'none';

        } else if (data.media_type === 'image') {
            console.log(data)

            document.querySelector('img').src = data.hdurl;
            document.querySelector('img').style.display = 'block';
            document.querySelector('video').style.display = 'none';
        }
    })
        
}