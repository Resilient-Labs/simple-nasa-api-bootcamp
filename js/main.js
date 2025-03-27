document.querySelector('button').addEventListener('click', hyperSpace);

function hyperSpace() {
    const inputDate = document.querySelector('input').value;

    const url = `https://api.nasa.gov/planetary/apod?api_key=GOva1P5AiSbasTV1c8DFhgYjzZ8sOKbsn7Afefiu&date=${inputDate}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h3').innerText = data.title
            document.querySelector('h4').innerText  = data.date
            document.getElementById('img1').src  = data.hdurl           
            document.querySelector('h5').innerText  = data.explanation     
            if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
            }else{
                document.querySelector('iframe').src = data.hdurl
            }        
        })  
        .catch(err => {
            console.log(`error ${err}`);
        });
}

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }

  window.onload = function() {
    // Delay audio start for 3 seconds
    setTimeout(playAudio, 3000);
  }