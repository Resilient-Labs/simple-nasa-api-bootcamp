// Simple NASA API - Picture of the day

// Account Email: blueduckco123@gmail.com
// API Key: r848LTb9LBZUF2aIjK0GtNrX8C3aLmtAsKaq6X73
// API URL: https://api.nasa.gov/planetary/apod?api_key=r848LTb9LBZUF2aIjK0GtNrX8C3aLmtAsKaq6X73

// QUERY PARAMETERS
// Parameter	Type	Default	Description
// date	YYYY-MM-DD of the NASA POD image to be retrieve
// add "&date=2019-07-05" to URL

document.querySelector("button").addEventListener("click", function(){

  const date = document.querySelector("input").value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=r848LTb9LBZUF2aIjK0GtNrX8C3aLmtAsKaq6X73&date=${date}`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    if(response.media_type === "image"){
        document.querySelector("img").src= response.hdurl
        document.querySelector("iframe").style.display = "none"
        document.querySelector("img").style.display = "initial"
    }else{
        document.querySelector("iframe").src= response.url
        document.querySelector("img").style.display = "none"
        document.querySelector("iframe").style.display = "initial"
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
})
