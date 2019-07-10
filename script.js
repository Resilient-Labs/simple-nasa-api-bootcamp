//NOTES BELOW
document.querySelector("button").addEventListener("click", function(){
  const date = document.querySelector("input").value
  let videoUrl = ""
  fetch(`https://api.nasa.gov/planetary/apod?api_key=gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX&date=${date}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response.media_type)
    if(response.media_type === "image"){
      //CC class display: hide VIDEO and vice versa.
      document.querySelector("img").style= "display: block"
      document.querySelector("iframe").style= "display: none"
      document.querySelector("img").src= response.hdurl
    } else if(response.media_type === "video"){
      document.querySelector("iframe").style= "display: block"
      document.querySelector("img").style= "display: none"
      document.querySelector("iframe").src= response.url
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("Sorry, there are no results for your search. Please try another date.")
  });

})

//NOTES
// Nasa API - enter date-get picture of date
// Get Your API Key
// Your API key for gmail.com is:
//
// gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX
// Account Email: gmail
// Account ID

// QUERY PARAMETERS
// Parameter	Type	Default	Description
// date	YYYY-MM-DD	today	The date of the APOD image to retrieve
// add "&date=2019-07-05" to URL

// fetch("https://api.nasa.gov/planetary/apod?api_key=gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response.drinks[0].strDrink)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });
