document.getElementById("btn").addEventListener("click", start)
let apikey = 'FnYtEeYFvVtoH7PRaW9UkMNfHnYlbs52l6U1GFl5'

function start() {
  let date = document.getElementById("date").value;
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`) 
  .then(res => res.json()) // parse response as JSON 
  .then(data => { 
    console.log(data) 
      document.getElementById("img").src = data.hdurl;
      document.getElementById("para").innerHTML = data.explanation;
  }) 
  .catch(err => { 
      console.log(`error ${err}`) 
  });
}
