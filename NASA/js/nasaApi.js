//created with House Gardener(Abbey, Sebastian, Ilunga, Elmer, Thais, Jessie)
let input = prompt("Enter a date (YYYY-MM-DD)")
  fetch(`https://api.nasa.gov/planetary/apod?api_key=bdr9NhtksGg6tFvuLQBPMelxZJFP22x3CtQIwXaE&date=${input}`)
      .then(response => response.json()) // parse response as JSON (can be res.text() for plain response)
      .then(jsonRes => {
        document.querySelector("p").innerHTML= jsonRes.explanation;
        document.querySelector("iframe").src = jsonRes.url;
          document.querySelector("img").src = jsonRes.url;
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
