document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=29ZQjC9LjtrYUqM639Aot2BX5YjNfVpYN0KSdoOE`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
          document.querySelector('h2').textContent = response.title
         document.querySelector('p').textContent = response.explanation
        }else{
          document.querySelector('iframe').src = response.url
        }

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
