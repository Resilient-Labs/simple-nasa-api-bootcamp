//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", picOfTheDay)

function picOfTheDay(){
  let year = document.querySelector(".year").value
  let month = document.querySelector(".month").value
  let day = document.querySelector(".day").value

  const url = `https://api.nasa.gov/planetary/apod?api_key=kjRpnUNdsbZsCn7OQQUqTngmQRgp2zfTV7KDWGdv&date=${year}-${month}-${day}`


   fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector("h2").innerText = data.title
      document.querySelector("img").src = data.url
      document.querySelector("h3").innerText = data.explanation

    })
    .catch(err => {
      console.log(`error $(err)`)
    })

}
