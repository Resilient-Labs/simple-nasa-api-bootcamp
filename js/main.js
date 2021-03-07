//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', submit)

function submit(){
  let year = document.querySelector('.year').value;
  let month = document.querySelector('.month').value;
  let day = document.querySelector('.day').value;
  let date = `${year}-${month}-${day}`
  const url = `https://api.nasa.gov/planetary/apod?api_key=o4d7OFq2asD0SeSnWzRGuSBkHjv92imtscCnYdf5&date=${date}`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
    .then(data => {
document.querySelector('h2').innerText = data.title
document.querySelector('.NasaImage').src = data.url
document.querySelector('h3').innerText = data.explanation
    console.log(data);  })
     .catch(err => {console.log(`error ${err}`)    });
}
