// //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



//fetch with try catch template

// async function tomato(){
// try{
// const apiRequest = await fetch('apiUrl')
// const apiResponse = await apiRequest.json()
// console.log(apiResponse);

// }catch(error){
//   console.log(error);
// }
// }

// three methods that can be used here - get, post, delete
// CRUD create read update delete


//here's how you make an API call
// async function tomato(){

// try{
// const apiRequest = await fetch('apiUrl')
// // parse response to json
// const apiResponse = await apiRequest.json()
// console.log(apiResponse);

// }catch(error){
//   console.log(error);
// }
// }

// tomato();



// we wonder if we can put the entire thing into a class to then make an object and have this all be OOP - let's OOP it


document.querySelector('button').addEventListener('click', getPicOfDay);

    function getPicOfDay() {
      console.log('get the date the user typed in');
      const userDate = document.querySelector('input').value;
      console.log('user entered', userDate);

      const key = 'ENspHfpA8rgrDvh60ZKXXrJdPc6VaDPmt3MzoXlm'
      const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${userDate}`;
      console.log('sending request to NASA API with that date');

      fetch(url)
        .then(res => {
          console.log('get response from nasa');
          return res.json();
        })
        .then(data => {
          console.log('nasa sends info', data);

          console.log('update title');
          document.querySelector('h2').innerText = data.title || 'Due to the lapse in federal government funding, NASA is not updating this website.';

          // clear previous media
          console.log('remove old image or video');
          document.querySelector('iframe')?.remove();
          document.querySelector('img').src = '';
          document.querySelector('img').alt = '';

          if (data.media_type === 'image') {
            console.log('displaying image');
            document.querySelector('img').src = data.url;
            document.querySelector('img').alt = data.title;
          } else if (data.media_type === 'video') {
            console.log('embedding video');
            const vid = document.createElement('iframe');
            vid.src = data.url;
            document.querySelector('div').appendChild(vid);
          }

          console.log('add description');
          document.querySelector('h3').innerText = data.explanation || 'Unavailable.';

          console.log('pic and/or loaded');
        })
        .catch(err => {
          console.error('error', err);
        })
      }
    