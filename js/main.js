document.querySelector('form').addEventListener('submit', nasa)//this is an arguement but in this case is passing a function

function nasa(e){//starts e
  e.preventDefault()
  let date = document.querySelector('#date').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)//interpolation or template literal
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
          document.querySelector('h1').textContent = response.title
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
