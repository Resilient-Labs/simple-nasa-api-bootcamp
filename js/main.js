// Created with House Gardner
let selectedDates=[] // list of objs

class NasaObj {
  constructor() {
    this.whatDate=document.querySelector('input').value.toString()
  }
  info(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=NvHf5M3vE2HXLuYYNupQhZ0LzjHSXhuAQs7rgQbW&date=${this.whatDate}`)
    .then(response => response.json())
    .then(data =>{

      document.querySelector('#title').textContent=data.title
      document.querySelector('#explanation').textContent=data.explanation

      if(data.media_type==='image'){
        document.querySelector('img').src=data.url
        if(document.querySelector('iframe').style.display===block){document.querySelector('iframe').style.display=hidden}
      }
      else if (data.media_type==='video') {
        document.querySelector('iframe').src=data.url
        document.querySelector('iframe').style.display=block
      }
      console.log(data)
    })
  }
}

document.querySelector('button').addEventListener("click", ()=>{
  let newDate= new NasaObj()
  newDate.info()
  selectedDates.push(newDate)
  console.log(selectedDates)
})
