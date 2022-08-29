//Enable your user to enter a date and return the picture/video of the day from NASA's API


//set up a event listener for clicking the button grabbing value out input 
document.querySelector("button").addEventListener('click', getPictureofDay)

//created a function 
function getPictureofDay() {
    //got the value out the input 
    let pictVal = document.querySelector('input').value
    //plugged the value into the URL 
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${pictVal}`
    //used the URL to make a fetch 
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        //got data back from the URL 
        .then(data => {
            console.log(data)
            //use the data to update the dom, 
           
            document.querySelector('img').src = data.hdurl //used bracket notation to grab the first drink index 0
            document.querySelector('h3').innerText = document.querySelector('input').value
            document.querySelector('p').src = data.hdurl
            document.querySelector('img').src = data.hdurl
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

