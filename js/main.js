// api key = yLHODqedRNLH5BcL6jKZ1ccakR5wV5xGRtVHjEAU
// date format YYYY-MM-DD
/*
1. create url for api with key
2. console log the data to find its properties
3. template literal inside of url to enter date set to the input value
4. event listener for button that initiates a function
5. return title, explanation & media of the day into the dom
6. create if/if else depending on the media type - img or vid
7. hide previous response on new search
8. autoplay for video media because its fun
8. hide the iframe until media type is video - circle back with mentor
*/

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
  let date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=yLHODqedRNLH5BcL6jKZ1ccakR5wV5xGRtVHjEAU&date=${date}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('p').innerText = data.explanation

    if(data.media_type === "image"){
      document.querySelector('img').src = data.url
      document.querySelector('iframe').src = ''

    }else if(data.media_type === "video"){
      let newUrl = data.url + "&autoplay=1&mute=1"
      console.log(newUrl)
      document.querySelector('iframe').src = newUrl
      document.querySelector('img').src = ''

    }else{
      alert('unsupported media type:' + data.media_type)
    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
