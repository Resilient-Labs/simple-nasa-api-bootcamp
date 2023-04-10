//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const search = document.querySelector('input').value
document.querySelector('button').addEventListener('click', getPicOfDay)

function getPicOfDay() {
  let selection = document.querySelector('input').value
  const url = (`https://api.nasa.gov/planetary/apod?api_key=fLoPm1slXP8HhXlkb9LbMQNvfavhJTEg8Bji4GWt&date=${selection}`)
  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('img').src = data.url
    console.log(data.image[0])
  }) 
  .catch(err => {
    console.log(`error ${err}`)
  })
}



