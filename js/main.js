//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getNASA)
let iframe = document.querySelector('iframe')  
let picture = document.querySelector('img')


function getNASA(){
const apiKey = 'm42i0otdZpKoCdGd24py7RhiJJWCoKlnqJNZ0XbW' 
let userDate = document.querySelector('input').value
let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${userDate}`


fetch(apiUrl)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#name').innerText = (data.title)

      if (data.media_type == 'image'){
        document.querySelector('img').src = data.url
        picture.classList.remove('hidden')
        iframe.classList.add('hidden')
      }
      else if (data.media_type == 'video'){
        document.querySelector('iframe').src = data.url
        iframe.classList.remove("hidden")
        picture.classList.add("hidden")
      }


      document.querySelector('h3').innerText = (data.explanation)

      

    })
    .catch(err => {
        console.log(`error ${err}`)
});

}
