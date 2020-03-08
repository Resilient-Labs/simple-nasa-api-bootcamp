let userRequest = prompt("Enter Date")
fetch(`https://api.nasa.gov/planetary/apod?api_key=PybKNNcOf3lafjoLt6CU2eTu3CAMZwrkHurYoSbz&date=${userRequest}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

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
