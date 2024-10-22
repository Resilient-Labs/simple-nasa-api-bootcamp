//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', ()=>{
    let date = document.querySelector('input').value
    console.log(date)
    let url = `https://api.nasa.gov/planetary/apod?api_key=yE7ZzDqqPMzWXzQ31sSQhXtOSqHA167cxT6K5OuR&date=${date}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      console.log(data) 
      console.log(data.media_type)

      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      let img = document.querySelector('img') 
      let vid = document.querySelector('iframe')
      if(data.media_type == 'image'){
        vid.classList.add("hidden")
        document.querySelector('img').src = data.hdurl
        img.classList.remove("hidden")

      }
      else{
        img.classList.add("hidden")
        document.querySelector('iframe').src = data.url
        vid.classList.remove("hidden")
      }
      
    }) 
    .catch(err => { 
        console.log(err)
    });
})