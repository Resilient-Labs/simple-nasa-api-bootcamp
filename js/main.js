let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

let date = '';

getData()

function getData() {
  if (date == null || date == ''){
    date = (today);
  }
  fetch(`https://api.nasa.gov/planetary/apod?api_key=WCepQp4aEg8LGyThar9erMF7od3pd1V2mu1jZfZ5&date=${date}`)
    .then(response => response.json())
    .then(data => {
      if (data.title == undefined){
        alert("That's not a valid date! Make sure its correctly typed and not in the future or before 1996")
        return
      }
      document.querySelector('h2').innerHTML=data.title
      document.querySelector('h3').innerHTML=data.date
      document.querySelector('p').innerHTML=data.explanation
      document.querySelector('img').style.display= "none";
      document.querySelector('iframe').style.display= "none";
      if(data.media_type=="image"){
        document.querySelector('img').src=data.url
        document.querySelector('img').style.display= "";
      }else{
        document.querySelector('iframe').style.display = "block";
        document.querySelector('iframe').src=data.url
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Sadly, Nasa hasn't provided a picuture for this date")
  })
}

function allTogether(){
  date = prompt("What date would you like to see the Nasa Picture of the day from! Make sure to use the YYYY-MM-DD format, or push escape to go to Today's knowledge");
  getData();
}
