document.querySelector('button').addEventListener('click', getPicture)


function getPicture() {
    let getNASA = document.querySelector('input').value
    let url= `https://api.nasa.gov/planetary/apod?api_key=7fLBirh7GgMe5lb2zr7DgzOpFJfayWfahHYm5D6i&date=${getNASA}`



fetch(url) // utilizing the fetch method 
    .then(res => res.json()) // parse response as JSON - utilizing the "then" method
    .then(data => { //utilize the then method again to pass "data" as the parameter to pass through the different properties of the object - we utilize "then" twice b/c our response needs to be parsed out from json 
    console.log(data)
      console.log(data.hdurl)
      document.querySelector('h2').innerText=data.title
      document.querySelector('img').src=data.hdurl
      document.querySelector('h3').innerText=data.explanation

    })
    .catch(err => { //preventative measure so when there is an error, it can be console logged to the person
        console.log(`error ${err}`)

});

}

