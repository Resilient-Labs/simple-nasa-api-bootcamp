//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const butt = document.querySelector('#thebutt')

function picOfDay() {
    let daydate = document.querySelector('#daydate').value;
    const nasaUrl =`https://api.nasa.gov/planetary/apod?api_key=8DMQJ7fDk93cLY2y09AQAuaFskcOqsvmG9HMQUcg&date=${daydate}`;
  
    fetch(nasaUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
      })
      .catch (err => {
        console.log(`error ${err}`);
      });
  }
  

//add event listener
butt.addEventListener('click', picOfDay)
