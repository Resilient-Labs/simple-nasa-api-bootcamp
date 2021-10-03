//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', startButton )
// let date = document.querySelector('input').value

function startButton(){
    let date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=fIZCDcR2yx1Bh709feyrzMi4RrMRi2ADtw0nJ18U&date=${date}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
        

        if(data.media_type === 'image'){
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('img').src = data.url
        
        }  else{
            document.querySelector('iframe').src = data.url
        }
        
        
        
        
        
    })
        .catch(err => {
            console.log(`error ${err}`);
            });
    
}


