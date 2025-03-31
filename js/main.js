//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPictureOfTheDay);

function getPictureOfTheDay() {
    const date = document.getElementById('date').value;
    const API_KEY = ['UwVd', 'MdWBNr', '5gX', 'J70E', 'Hr41', '5', 'J3KsLq', 'K9I', 'DNkq', 'cdVhe'];
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY.join('')}&date=${date}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h3').innerText = data.title;
            document.querySelector('h5').innerText = data.explanation;
            console.log(data);
            if (data.media_type === 'image') {
                document.querySelector('.frame').innerHTML = `<img src="${data.url}" alt="${data.title}" />`
                // document.querySelector('img').src = data.hdurl;
                // document.querySelector('iframe').src = '';
            } else if ( data.media_type === 'video') {
                // 2025-02-16
                document.querySelector('.frame').innerHTML = `<iframe src="${data.url}" alt="${data.title}" frameborder=""></iframe>`
                // document.querySelector('iframe').src = data.url;
                // document.querySelector('img').src = '';
            }
        })
};
