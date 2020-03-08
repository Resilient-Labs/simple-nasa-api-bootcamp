let userQuestion= prompt("Enter a date yyyy-mm-dd")

fetch(`https://api.nasa.gov/planetary/apod?api_key=WxVO3lsE9yiYOP7HT79Gd2scdCFfL2rMspDIbe1a&date=${userQuestion}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if(response.media_type === "video"){
      document.querySelector('iframe').src=response.url
      document.querySelector('h1').innerHTML= "Nasa's Video of The Day"
      // document.querySelector('iframe').
      console.log(response.url)

    }else{
      document.querySelector('img').src=response.url
      document.querySelector('h1').innerHTML= "Nasa's Picture of The Day"
      // document.querySelector('iframe').style=block
      console.log(response.url)
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
