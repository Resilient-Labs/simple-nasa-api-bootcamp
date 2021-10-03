//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getImage)
document.querySelector('input').addEventListener('keypress',getImage)



function getImage(){
    // const url =`https://api.nasa.gov/planetary/apod?api_key=QYZ73CtaZzjlIfE6u6zMsdkXcWre7h1l0XnV6W3C=z&date${date}`

// }


    let date =document.querySelector('input').value
    const apiKey = "QYZ73CtaZzjlIfE6u6zMsdkXcWre7h1l0XnV6W3C"

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${date}&end_date=${date}`


    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
      document.querySelector("h2").innerText = data[0].title
      document.querySelector(".pic").src = data[0].hdurl
      document.querySelector("h3").innerText = data[0].explanation
      if (data.media_type === "video") {
        document.querySelector("iframe").style.display = "none"
        document.querySelector(".pic").style.display = "none"
       document.querySelector("iframe").src = data[0].hdurl
     } else {
       document.querySelector(".pic").src = data[0].hdurl
     }

    })


    .catch(err => {alert("Request Not Found")
    })
}

