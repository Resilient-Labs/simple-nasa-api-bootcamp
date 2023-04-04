//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicOfTheDay)

//OLDER ATTEMPT
// function getPicOfTheDay()
// {
//   let userInput = document.querySelector('input').value
//     const url = `https://api.nasa.gov/planetary/apod?api_key=qszQTMW5amtONE4CH4BceFDOYYc1me2Xb3nvJxOf&date=${userInput}`
//     fetch(url)
//     .then(res => res.json()) // parse response as JSON 
//     .then(data => { 
//       console.log(data)
//       if (data.media_type == 'image')
//       {
//         document.querySelector('img').src = data.url
//       }
//       else if (data.media_type == 'video')
//       {
//         document.querySelector('iframe').src = data.url
//         document.querySelector('iframe').classList.toggle('hidden')
//         document.querySelector('img').src = null
//       } 
//       document.querySelector('h2').innerHTML = data.date
//       document.querySelector('h3').innerHTML = data.explanation
//     }) 
//     .catch(err => { 
//         console.log(`error ${err}`) 
//     })
//   }


function getPicOfTheDay() {
  let userInput = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=qszQTMW5amtONE4CH4BceFDOYYc1me2Xb3nvJxOf&date=${userInput}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.media_type == 'image') {
        document.querySelector('img').src = data.url
        document.querySelector('img').classList.remove('hiddenFlexImg') // remove hiddenFlexImg class from img
        document.querySelector('iframe').classList.add('hidden') // add hidden class to iframe
      } else if (data.media_type == 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('iframe').classList.remove('hidden') // remove hidden class from iframe
        document.querySelector('img').classList.add('hiddenFlexImg') // add hiddenFlexImg class to img
      }
      document.querySelector('h2').innerHTML = data.date
      document.querySelector('h3').innerHTML = data.explanation
      
      // add event listener to toggle hidden class
      document.querySelector('iframe').addEventListener('click', () => {
        document.querySelector('iframe').classList.toggle('hidden')
        document.querySelector('img').classList.toggle('hiddenFlexImg') // toggle hiddenFlexImg class on img
      })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}