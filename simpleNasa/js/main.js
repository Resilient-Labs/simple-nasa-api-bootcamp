//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getDate)

function hideBoth(){
  let hidden = document.querySelector('img')
  hidden.classList.add('hidden')
  let hide = document.querySelector('iframe')
  hide.classList.add('hidden')
}
hideBoth()

function hideSolar(){
  let hidden = document.getElementById('solar')
  hidden.classList.remove('solar')
}

function hideImg(){
  let hidden = document.querySelector('img')
  hidden.classList.add('hidden')
  let show = document.querySelector('iframe')
  show.classList.remove('hidden')
}

function hideVideo(){
  let hidden = document.querySelector('iframe')
  hidden.classList.add('hidden')
  let show = document.querySelector('img')
  show.classList.remove('hidden')
}

function getDate(){
  let dateVal = document.querySelector('input').value
  let url = `https://api.nasa.gov/planetary/apod?api_key=5aEx1Opu4vhTGEFsxSII9XC88Ac6ksguRIBjVCPP&date=${dateVal}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    if(data.media_type === 'image'){
      document.querySelector('img').src = data.url
      hideVideo()
    } else if (data.media_type === 'video'){
      document.querySelector('iframe').src = data.url
      hideImg()
    } else {
      alert('Unsupported Media Type')
    }
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
  hideSolar()
}