let userDate = document.getElementById('date')
let check = document.querySelector('button')
let formCheck = document.querySelector('input')


check.addEventListener('click',()=>{

console.log(userDate.value)
fetch(`https://api.nasa.gov/planetary/apod?api_key=tacqQB2Bx00ubPgP4JHHDsUqGs5iBgmx1YwevpWw&date=${userDate.value}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      // console.log(response.url)
      if(response.media_type === "video"){
        document.querySelector('iframe').src= response.url
      }else{
        document.querySelector('img').src= response.url

      }


      document.querySelector('section').src= response.url
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

})
