//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = "4QhcsQeg11gJzWT9TEdbdW7erymmn8uYKq13cdoA"
const iframe = document.querySelector('iframe')
const img = document.querySelector('img')


const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=`
document.querySelector('button').addEventListener('click', getInfo)


function getInfo() {
  let month = document.querySelector('#month').value
  //if month > 0 < 12 make it valid else, tell user month is wrong
  let day = document.querySelector('#day').value
  //if statement for day parameter else, tell user days are wrong
  let year = document.querySelector('#year').value
  //if statement for year parameter else, tell user invalid year
  iframe.src=''
  iframe.classList.add('hide')
  img.classList.add('hide')
  img.src=''

  fetch(url+`${year}-${month}-${day}`)
    .then(res => res.json())
    
    .then(data => {
      console.log(data)
      if(data.media_type==="image"){
        img.classList.remove('hide')
        img.src = data.url
      } else if(data.media_type==="video"){
        iframe.classList.remove('hide')
        iframe.src = data.url
      }
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
    })
    .catch(err => {
      console.log(`error ${err}`)
      //figured out an issue where the catch doesn't apply to the code due to the server still connecting and just returning a undefined list
      alert("Please enter a valid day!")
    });
}