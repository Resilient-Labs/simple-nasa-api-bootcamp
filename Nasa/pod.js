const jawn = document.querySelector(".date");

//take jawns (city and country) and submit them for check//
document.querySelector(".getJawn").addEventListener("click", pod);

function pod() {
  let Media = jawn.value 
  console.log(Media);
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=uO3KZy4MfBSXrr8kfhqlxpPUZsH1RAk8iTcel5yW&date=${Media}`
  )
    .then((res) => res.json())
    .then((data) => {
        console.log("Data from Nasa",data)
      displayJawn(data.url);
    });
}

function displayJawn(neatStuff) {
    
    document.getElementById("output").src= neatStuff }