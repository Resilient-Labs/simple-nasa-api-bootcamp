const btn = document.querySelector("#searchButton")
// const zipcode = document.querySelector("#zipCode")
const result = document.querySelector('#result')
// let countrycode = document.querySelector('#countrycode').value.toLowerCase()
const apiKey = "bb7840518c3dd59e9338c78c5449e955"
btn.addEventListener('click', ()=>{
  const city = document.querySelector("#cityName").value.toLowerCase()
  let countryCode = document.querySelector('#countrycode').value.toLowerCase()
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${apiKey}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
            let far = Math.floor(response.main.temp * 9/5-459.67)
            let v = document.createTextNode(far)
            result.appendChild(v)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });


})
