//psuedo code
//User enters date. Use date to fetch NASA picture of the day.
//api_key = 'RCCJPepO3Xd2IWaWTHLkKCDXZmuTfNImKtlVfsDf'

//DOM
const button = document.querySelector('button');
const img = document.querySelector('img');
const name = document.querySelector('h2')
const description = document.querySelector('h3');
const copyright = document.querySelector('h4')

//Check date

button.addEventListener('click', checkDate)

function checkDate() {
    const date = document.querySelector('input').value;
    const userDate = new Date(date);
    const currentDate = new Date();

    if (userDate <= currentDate) {
        goFetch(date);
    } 
    else {
        alert('You are in the future. Please enter a valid date.');
    }
}

//Fetch with API

function goFetch(date) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=RCCJPepO3Xd2IWaWTHLkKCDXZmuTfNImKtlVfsDf&date=${date}`;
    const iframe = document.querySelector('iframe');
    const image = document.querySelector('img');

    fetch(url)
        .then(res => res.json()) //parse response
        .then(data => {
            console.log(data);

            if (data.media_type === "image") {
                iframe.classList.add('hidden');
                image.classList.remove('hidden');
                image.src = data.url || data.hdurl;
                iframe.src = '';
            } else if (data.media_type === "video") {
                iframe.classList.remove('hidden');
                image.classList.add('hidden');
                iframe.src = data.url;
            }

            name.innerText = data.title;
            description.innerText = data.explanation;
            copyright.innerText = data.copyright;
            copyright.innerText = data.copyright //orginally showing up as undefined due to newline characters (\n) or white spaces, looked up on stackoverflow - https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
            ? `© ${data.copyright.trim()}` //remove the leading/trailing \n or spaces, looked up on Google
            : '© Public Domain'; //falls back to '© Public Domain' if undefined
            name.style.display = 'block';
            description.style.display = 'block';
            copyright.style.display = 'block';

        })
        .catch(err => {
            console.log(`error ${err}`);
            alert('Failed to load data from NASA. Try another date.');
        });
}

// Citation:
// Referenced from Tutorial - https://www.youtube.com/watch?v=b5rjEW-_6po 

