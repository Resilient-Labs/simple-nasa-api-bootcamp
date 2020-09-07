// let userAnswer = prompt("What cocktail would you like?")
// userAnswer = userAnswer.replace(" ","%20")
// console.log(userAnswer)

Date.prototype.subHours = function(h) {
  this.setTime(this.getTime() - (h*60*60*1000));
  return this;
}
let Nasa = {
  today: {
    date: new Date().subHours(4).toISOString().slice(0,10),
    day: new Date().subHours(4).getDate(),
    month: new Date().subHours(4).getMonth(),
    year: new Date().subHours(4).getYear()+1900,
  },

  getDate:
  ()=>{

    //================grabs input and makes it a parameter of Nasa==============//
    Nasa.input.date = document.querySelector('input').value.toString();
    Nasa.input.day = new Date(document.querySelector('input').value.toString()).getDate()+1;
    Nasa.input.month = new Date(document.querySelector('input').value.toString()).getMonth()+1;
    Nasa.input.year = new Date(document.querySelector('input').value.toString()).getYear()+1900;
    //================Takes care of edge cases==============//
    if(Nasa.input.year>Nasa.today.year||(Nasa.input.month>Nasa.today.month&&Nasa.input.day>Nasa.today.day&&Nasa.input.year===Nasa.today.year)||Nasa.input.date===''){
        Nasa.input.date = `${Nasa.today.date}`;
    }
    //==================Fetch that updates DOM====================//
  fetch(`https://api.nasa.gov/planetary/apod?api_key=FxKA8vtb5XoWnL9Yd8X9FbeYNhPOmYf0OnhBn4To&date=${Nasa.input.date}`)
    .then(response => response.json())
    .then(data => {

      if(data.media_type==='video'){
        document.querySelector('iframe').src = data.url;
        document.querySelector('iframe').style.display = 'block';
        document.querySelector('img').src = '';

      }else{
        document.querySelector('iframe').style.display = 'none';
        document.querySelector('img').src = data.url;
      }
      document.querySelector('h1').innerHTML = data.title
      document.querySelector('p').innerHTML = data.explanation
    })
    .catch(err => console.log(err))
  },
  input: {
    date: document.querySelector('input').value.toString(),
    year: new Date(document.querySelector('input').value.toString()).getYear()+1900,
    day: new Date(document.querySelector('input').value.toString()).getDate()+1,
    month: new Date(document.querySelector('input').value.toString()).getMonth()+1,
  },
  warpSpeed: ()=>{
    document.querySelector('body').style.backgroundImage = "url('img/background2.gif')"
    setTimeout(()=>{
    document.querySelector('body').style.backgroundImage = "url('img/background.gif')"
    Nasa.getDate()
  },7000)
  },
}

Nasa.getDate()
