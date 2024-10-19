import { apiKey } from "./apiKey.js";

const getPicBtn = document.querySelector('#getPic'); 
getPicBtn.addEventListener('click', retrievePic); 
getTodayPic.addEventListener('click', retrievePic)

function retrievePic(e) {
   
  let url; 
  if (e.target.id === 'getPic') {
    const dateInput = document.querySelector('#date'); 
    const date = dateInput.value;
    if (!date) {
      alert('Enter a date'); 
      return; 
    }
    url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    document.querySelector('.dateTitle').textContent = date;
    dateInput.value = ''; 
    
  }
  else {
    let today = new Date(); 
    const [month, day, year] = [
      today.getMonth(),
      today.getDate(),
      today.getFullYear(),
    ];
    today = [year, month, day].join('-');
    url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${today}`;
    document.querySelector('.dateTitle').textContent = today;
  }
  
  const title = document.querySelector('.title'); 
  const description = document.querySelector('.description'); 
  const img = document.querySelector('img'); 
  const iframe = document.querySelector('iframe')

  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      title.innerText = result.title; 
      description.innerText = result.explanation; 
      if (result.media_type === 'image') {
        img.classList.remove('hidden');
        img.src = result.hdurl; 
        iframe.classList.add('hidden'); 
        iframe.src = '';
      }
      else {
        iframe.classList.remove('hidden');
        iframe.src = result.url;
        iframe.title = result.title; 
        img.classList.add('hidden');
        img.src = '';
      }
    }).catch(err => console.error(err));
}

