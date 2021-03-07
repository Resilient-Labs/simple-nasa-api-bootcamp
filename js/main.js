

document.querySelector("button").addEventListener("click", picOfTheDay)

function picOfTheDay(){
  let year = document.querySelector(".year").value
  let month = document.querySelector(".month").value
  let day = document.querySelector(".day").value

  const url = `https://api.nasa.gov/planetary/apod?api_key=kjRpnUNdsbZsCn7OQQUqTngmQRgp2zfTV7KDWGdv&date=${year}-${month}-${day}`


   fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.media_type === "video") {
        document.querySelector("iframe").style.display = "block"
        document.querySelector("img").style.display = "none"
       document.querySelector("iframe").src = data.url
     } else {
       document.querySelector("img").src = data.url
     }
      document.querySelector(".mediaTitle").innerText = `${data.title}`
      document.querySelector(".description").innerText = data.explanation






    })
    .catch(err => {
      console.log(`error $(err)`)
    })

}
