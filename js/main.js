//The user will enter a date. Use that date to get 
// the NASA picture of the day from that date! https://api.nasa.gov/
console.log("hello")
document.querySelector('button').addEventListener('click', whatHappenedThatDay)
const iframe = document.querySelector('iframe')
const image = document.querySelector('img')

function whatHappenedThatDay() {
  let whatDay = document.querySelector('input').value
  const url = (`https://api.nasa.gov/planetary/apod?api_key=bGCyq1wm8NKvZ45QwgeJR95DstfhSWscgrOKuMbg&date=${whatDay}`)
  // console.log('hello')
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title

      if (data.media_type === 'image') {
        image.src = data.url
        image.classList.remove('hide')
        iframe.classList.add('hide')
      } else if (data.media_type === 'video') {
        iframe.classList.remove('hide')
        iframe.src = data.url
        image.classList.add('hide')
      }
      document.querySelector('span').innerText = data.date
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// console.dir -> seeing objects
console.log('connection or not')