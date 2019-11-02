// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });


var key_51ns = config.KEY_51ns
const submit = document.querySelector("#submit")

let nasaApi = 'ye7JdojcCAscUuuL3uskIc8GOTZnAcuZHF0gcTRa'

submit.addEventListener('click', function(){
  const date = document.querySelector("#date").value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key_51ns}&date=${date}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        if (response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else if(response.media_type == "video"){
          document.querySelector('iframe').src = response.url
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
