
document.querySelector('button').addEventListener('click', findPhoto); // event starts after you click button

function findPhoto() {
    const date = document.querySelector('#date').value; /// the date inputted
    const url = `https://api.nasa.gov/planetary/apod?api_key=Gl1QFwNBPM5DQtOcwIc0rxyDMH49itGNFyDhJQqD&date=${date}`;

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

            
            document.querySelector('#title').innerText = data.title; //place title
            document.querySelector('#explanation').innerText = data.explanation;

            if(data.media_type == 'image'){ // runs if media is image
                console.log(data);
                document.querySelector('img').classList.toggle('hidden')
                document.querySelector('img').src = data.hdurl; // place image

            }else if(data.media_type == 'video'){
                console.log(data);
                document.querySelector('iframe').classList.toggle('hidden')
                document.querySelector('iframe').src = data.url; // video
                document.querySelector('#explanation').innerText =`Watch video here ${data.url}`
            }
            else{
                document.querySelector('#explanation').innerText ="Sorry something went wrong";
            }
                
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
