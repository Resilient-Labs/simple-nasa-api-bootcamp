document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  //variable to contain input itself used later to clear input value
  let input = document.querySelector('input')
  //create variable for section to contain iframe later
  const container = document.querySelector('section')
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if (input.value = date) {
        //remove input value after submitting date
        input.value = "";
        if(response.media_type == "image"){
          //template for an image of the day
          container.style.background = "white";
          document.querySelector('img').src = response.hdurl
          document.querySelector('h2').textContent = response.title
          document.querySelector('p').textContent = response.explanation
        }else{
          //template for video if the json doesnt return an image
          container.style.background = "white";
          //iframe is funky so I decided to have js create the iframe instead of having it in the HTML
          const video = document.createElement('iframe')
          video.src = response.url
          document.querySelector('h2').textContent = response.title
          document.querySelector('p').textContent = response.explanation
          //display video within the section
          container.appendChild(video)
        }
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
        document.querySelector('h2').textContent= "sorry, there are no results for your search"
    });
}
