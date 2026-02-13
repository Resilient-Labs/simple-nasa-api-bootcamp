//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//listen for click , call the api
//read the date the user typed
//build the NASA API URL with that date
//Fetch JSON from NASA
//grab title, image or video, and description and put them in the DOM

//make it responsive
document.querySelector('button').addEventListener('click', getMedia)
    

function getMedia(){//function has to be called; waiting for click
    
    const inputText = document.querySelector('input').value; //the user can't get anything here; runs on page load if outside the function
    const key = 'Fx2O73dSx1lVmfYdm7R3Q60p5PWmnvIC18akqqcd';

    console.log(inputText);//empty space when outside the function

    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inputText}`;//this is from the documentation

    fetch(url)
        .then(res =>res.json()) //convert into JSON
        .then(data =>{

            console.log(data)
            document.querySelector('h2').innerText = data.title;

            if(data.media_type === "image"){
                //we want to get the image url into 'img'
                document.querySelector('img').src=data.url;
                document.querySelector('img').alt = data.title;
                document.querySelector('iframe').style.display = 'none';
                document.querySelector('img').style.display = 'block';
    
            }
            else if (data.media_type === 'video'){
                //we want to get the video url into 'video'
                document.querySelector('iframe').src=data.url;
                document.querySelector('img').style.display='none';
                document.querySelector('iframe').style.display = 'block';
            
            }
            document.querySelector('h3').innerText = data.explanation;

            

        })
        .catch(err=>{
            console.log(`error ${err}`);
        });


}

