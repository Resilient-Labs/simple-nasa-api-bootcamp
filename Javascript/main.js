document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        document.querySelector('h2').innerText=response.title;
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else{
          document.querySelector('iframe').src = response.url
        }
        document.getElementById('description').innerText= response.explanation;
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
