//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const choice = document.querySelector('input').value
  
  console.log(choice);
  //paramaters comes after the question mark. for multiple paramaters you need to add the & symbol 
  const url = `https://api.nasa.gov/planetary/apod?api_key=y42BtPxTGF8wwZdfhOvvDkpjkRCb8CnbcTBSfStf&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === "image") {
          document.querySelector('img').src = data.url
          document.querySelector('iframe').src = ''
        }
        else if (data.media_type === "video"){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').src = ''
        }
        else('media not suppoerted - contact NASA ASAP')
        document.querySelector('h3').innerHTML = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}