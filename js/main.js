//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
  let date = document.querySelector('#userInput').value

  document.querySelector('iframe').src = ""

//fetch goes in the function / ?api_key indicates the first parameter &date indicates the following.. when using template literals you can to replace the '' with ``.. json "javascript script object notation"
  
fetch(`https://api.nasa.gov/planetary/apod?api_key=cY9rcUBSfvaAZmomuDuB7LNi1zRipdqNAe9ZdmJR&date=${date}`)
    .then(res => res.json()) 
    .then(data => {
      console.log(data)

      document.querySelector('h2').innerText = data.title

      document.querySelector('h3').innerText = data.explanation

      if( data.media_type === 'image'){
            document.querySelector('#nasaImg').src = data.hdurl
      }else if( data.media_type === 'video'){ 
            document.querySelector('iframe').src = data.url
      }else{
            alert('Unsupported Media Type')
      }

    })
    .catch(err => {
      console.log(`errors $(err)`)
    })


}

