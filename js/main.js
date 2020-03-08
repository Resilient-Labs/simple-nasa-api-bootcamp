

let userRequest = prompt("Enter a Date")

fetch(`https://api.nasa.gov/planetary/apod?api_key=rLIZRWh4J8qcbwwsZm8dRyRTbvNlkEKbV6baW7BA&date=${userRequest}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      console.log(response)
      console.log(response.url)

      if(response.media_type==="video"){
        document.querySelector('iframe').src=response.url
      }else{
        document.querySelector('img').src=response.url

      }

    })
    .catch(err => {
       console.log(`error ${err}`)
       alert("sorry, there are no results for your search")
   });
