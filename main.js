//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const getPOD = document.querySelector('button');

getPOD.addEventListener('click', function () {
  const datesAstronomy = document.querySelector('input').value;
  const astronomyImages = document.querySelector('.img');
  fetch(`https://api.nasa.gov/planetary/apod?date=${datesAstronomy}&api_key=YnT0fsXObxZmgXOmK7PM1GVEyWH9rMdMflXYphqd`)
    .then(res => res.json()) //parse response JSON
    .then(response => {
      astronomyImages.src = response.url;
      console.log(response);
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("There are no results for your search, please try again")
    });
}, false);
  // let apiKey = "YnT0fsXObxZmgXOmK7PM1GVEyWH9rMdMflXYphqd"
  // let apiURL = "https://api.nasa.gov/planetary/apod?"