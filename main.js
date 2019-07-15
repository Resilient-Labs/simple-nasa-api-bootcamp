// Nasa API - enter date-get picture of date
// Get Your API Key
// Your API key for johannfolta@gmail.com is:
//
// gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX
// Account Email: johannfolta@gmail.com
// Account ID: 292fe41f-52d5-464a-b1ac-1b93aa1db4bd

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
document.querySelector("button").addEventListener("click", function(){

// ask leon about .textContent?
  const date = document.querySelector("input").value
  // document.querySelector("h1").innerHTML = "hello"

  fetch(`https://api.nasa.gov/planetary/apod?api_key=gPBTc1nbfvN3RBbEacc0yFCVALuTdb1itJcp1PQX&date=${date}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
  if(response.media_type === "image"){
    document.querySelector("#imageOfDay").src= response.hdurl
    document.querySelector("#vidOfDay").style.display = "none"
    document.querySelector("#imageOfDay").style.display = "initial"
  }else{
    document.querySelector("#vidOfDay").src= response.url
    document.querySelector("#imageOfDay").style.display = "none"
    document.querySelector("#vidOfDay").style.display = "initial"
  }
    console.log(response)


  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });

})
