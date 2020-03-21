//House Gardner worked on this project as a group.

let nasaApi = {
  button: document.querySelector("button"),
  fetchPhoto: () => {
  const input = document.querySelector('input').value;
  fetch(`https://api.nasa.gov/planetary/apod?api_key=tHptlbZkjhuFPLoHyWQTk4pe3Tbe3GLBTHKY8EU1&date=${input}`)
      .then(res => res.json())
      .then(response => {
      if (response.media_type == "image"){
        document.getElementById("photo").src = response.url;
      }else if (response.media_type == "video"){
        document.querySelector("iFrame").src = response.url;
      }
    });
      
      .catch(err => {
        console.log(`error ${err}`);
        alert("sorry, there are no results for your search");
      })
    }
  }
