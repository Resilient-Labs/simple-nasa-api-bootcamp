//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', results)


function results(){
  let year = document.querySelector('.year').value
  let month = document.querySelector('.month').value
  let day = document.querySelector('.day').value
  let date = `${year}-${month}-${day}`
  // let inputVal = document.querySelector('.date').value
  console.log(date)
  const url  = `https://api.nasa.gov/planetary/apod?api_key=K4dUx2YcfVnkYWecMpoT9vNKIZQScke9WJbd2cvH&date=${date}`
    console.log(url)
  fetch(url)

    .then(res => res.json())
    .then(data =>{
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.url
      document.querySelector('h3').innerText = data.explanation
      console.log(data)
    })

    .catch(err => {
      console.log(`error${err}`)
    })
}
