document.querySelector('button').addEventListener('click', getPictureOfDay)

function getPictureOfDay() {
   const date = document.querySelector('input').value
   const url = `https://api.nasa.gov/planetary/apod?api_key=MMlf5VEZo6dpJFnePlW1QFSyUy5suYBmHbocfOzE&date=${date}`
   fetch(url)
      .then(resp => resp.json())
      .then(data => {
         console.log(data);
         document.querySelector('h2').innerText = data.title
         if (data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').src = ''//data.url.classList.add ('hidden')
         }
         else if (data.media_type === 'video')  {
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src = '' //data.hdurl.style.display = 'none'
         }

         document.querySelector('h3').innerText = data.explanation
      })
      
}

