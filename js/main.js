//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", nasaPicture);
document.querySelector("video").style.display = "none";
document.querySelector("video").style.width = "40%";
document.querySelector("video").style.marginLeft = "3rem";
document.querySelector("img").style.width = "40%";


function nasaPicture() {
    const date = document.querySelector("input").value;
    const url=`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

    fetch(url).then(response => response.json())
        .then(data => {
        console.log(data.explanation);
        
       if(data.media_type === "video"){
            document.querySelector("video").style.display = "block";
            document.querySelector("img").style.display = "none";
            document.querySelector("video").src = data.url;
            

        }
        else if(data.media_type === "image"){
            document.querySelector("video").style.display = "none";
             document.querySelector("img").style.display = "block";
            document.querySelector("img").src = data.hdurl;

        }
       document.querySelector("h2").innerText = data.title;
       document.querySelector('h3').innerText = data.explanation;
    });
}


