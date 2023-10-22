//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//connect button to your function 
document.querySelector('button').addEventListener('click', getPicture);

function getPicture(){

    const userDate = document.querySelector('#userDate').value
   console.log('userDate : ' + userDate)// have to print what you are trying to test


    const url =
      `https://api.nasa.gov/planetary/apod?api_key=Cea7sAh7MbK91K2hyjtlz921uRschAosJdkAdhG9&date=${userDate}`;//placeholder for users input for template literal
    // console.log('url : ' + url )
    
    fetch(url)// go get api
      .then(res => res.json())
      .then(data => { // then do this after with parameter data
        console.log(data);//this is a method to get api 
        document.querySelector('h1').innerText = `date: ${data.date}`
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation

        if(data.media_type === 'video'){ 
          document.querySelector('iframe').src = data.url;
          if(document.querySelector('iframe').classList.contains('hidden')){
             document.querySelector("iframe").classList.remove("hidden");
             document.querySelector("img").classList.add("hidden");
             console.log("video is working and img is hidden");
          }
         

        } 

        else if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl;
          console.log('image is working');


          if (document.querySelector('img').classList.contains("hidden"))
            document.querySelector('img').classList.remove('hidden');
            document.querySelector('iframe').classList.add('hidden');
            console.log('image is working and video is hidden')
        }
       
      })
      .catch(err => {
        console.log(`error ${err}`)
      });    
}

