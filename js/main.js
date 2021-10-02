//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getInfo)




function getInfo (){
    let date = document.querySelector('input').value
    
    

    const url = `https://api.nasa.gov/planetary/apod?api_key=61X9X1p9kQWLQGkMasHlHF1c2NuqPaWjeUNfLLxc&date=${date}`

    fetch(url) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)
        
        if(data.media_type === 'image'){
        document.querySelector('img').src = data.url
        document.querySelector('img').hidden = false
        document.querySelector('iframe').hidden = true
        }
        else {
        document.querySelector('iframe').src =data.url
        document.querySelector('iframe').hidden = false
        document.querySelector('img').hidden = true
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 
}