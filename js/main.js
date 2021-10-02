//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', startButton)




function startButton() {
  let val = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=EaR9Zjd493jspdhpgnOudwA4piJyMF7nAklUnsOw&date=${val}`

fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)


    if(data.media_type === 'image'){
      document.querySelector('img').src = data.url
      document.querySelector('img').hidden = false
      document.querySelector('iframe').hidden = true
    }else {
      document.querySelector('iframe').src = data.url
    }
    

  })

  .catch(err => {
    console.log ('error ${err}');
  });
}
