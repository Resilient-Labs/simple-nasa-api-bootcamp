
let datetemplate= document.querySelector('input')
console.log(datetemplate)

fetch(`https://api.nasa.gov/planetary/apod?api_key=P8MoaznCZX9CrNEjgG1rwD6geT99yYcX3CjnK9dD&date=${datetemplate.value}`)
  // .value parse calander input date only
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      // iframe from youtube
      // display none
      // loop made for if response.media_type
      // choose the query selector
      // width and height already stated

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
