console.log('main.js loaded');

const input = document.querySelector('input');
document.querySelector('button').addEventListener('click', getNasa);

function getNasa(){
    let media = input.value;

    // 2024-01-15 becomes 240115
    let code = media.slice(2).replaceAll('-', '');

    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic?date_from=${code}&date_to=${code}&per_page=1`)
        .then(res => res.json())
        .then(data => {
            console.log('new from Nasa', data);

            // no entry for that date
            if (!data.length) {
                showMessage('No picture for this date, try another one');
                return;
            }

            let item = data[0];

            // videos can't show in an <img>
            if (item.media_type !== 'image') {
                showMessage(item.title + ' is a video today. Watch it here: ' + item.permalink);
                return;
            }

            display(item.hdurl, item.title, item.explanation);
        })
        .catch(err => console.error('Error fetching data:', err));
}

function display(imagess, title, explanation){
    document.querySelector('img').src = imagess;
    document.querySelector('h2').innerText = title;
    document.querySelector('h3').innerText = stripHtml(explanation);
}

// explanation comes back as HTML, so turn it into plain text
function stripHtml(html){
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent.replace('Explanation:', '').trim();
}

function showMessage(text){
    document.querySelector('img').src = '';
    document.querySelector('h2').innerText = text;
    document.querySelector('h3').innerText = '';
}