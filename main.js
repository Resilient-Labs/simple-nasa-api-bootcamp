//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', pullDate);
document.querySelector('img').style.display = 'none';
document.querySelector('video').style.display = 'none';

function pullDate() {
  let date = document.querySelector('input').value;
  console.log(date);
  console.log(date.split('-'));
  console.log(date.split('-').join(''));
  console.log(date.split('-').join('').slice(2));
  date = date.split('-').join('').slice(2);
  //console.log(date);

  const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('h2').innerText = data.title;
      if (data.media_type === 'video') {
        let basicHTML = data.basic_html;
        let parser = new DOMParser();

        let doc = parser.parseFromString(basicHTML, 'text/html');
        let videoLink = doc.querySelector('source').src;
        console.log(videoLink);

        document.querySelector('video').src = videoLink;
        document.querySelector('video').style.display = 'block';
        document.querySelector('img').style.display = 'none';
      } else if (data.media_type === 'image') {
        console.log(data);

        document.querySelector('img').src = data.hdurl;
        document.querySelector('img').style.display = 'block';
        document.querySelector('video').style.display = 'none';
      }

      document.querySelector('h3').innerHTML = data.explanation;
    });
}
