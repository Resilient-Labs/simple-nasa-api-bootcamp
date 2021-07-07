let apiKey = "1SNm39yafaGNxWU8RKgqA5H3EVGAr8MfBLXA98tk";
let month = document.getElementById("month");
let day = document.getElementById("day");
let a,b,c;
let year = document.getElementById("year");
month.onchange = function(){
  a = document.getElementById("month").value;
  if(a !=undefined&& b !=undefined && c!=undefined){
    fetch(`https://api.nasa.gov/planetary/apod?date=${c}-${a}-${b}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response =>{
        if(response.hdurl){
          document.querySelector("img").src = response.hdurl;
        }
        else{
          alert("input another date, this date had a video instead of an image");
        }
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert('sorry, there are no results for your search');
      });
  }
}
day.onchange = function(){
  b = document.getElementById("day").value;
  if(a!=undefined&&b!=undefined&&c!=undefined){
    fetch(`https://api.nasa.gov/planetary/apod?date=${c}-${a}-${b}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response =>{
        if(response.hdurl){
          document.querySelector("img").src = response.hdurl;
        }
        else{
          alert("input another date");
        }
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert('sorry, there are no results for your search');
      });
  }
}
year.onchange = function(){
  c = document.getElementById("year").value;
  if(a!=undefined&& b!=undefined&& c!=undefined){
    fetch(`https://api.nasa.gov/planetary/apod?date=${c}-${a}-${b}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response =>{
        if(response.hdurl){
          document.querySelector("img").src = response.hdurl;
        }
        else{
          alert("input another date");
        }
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert('sorry, there are no results for your search');
      });
  }
}
