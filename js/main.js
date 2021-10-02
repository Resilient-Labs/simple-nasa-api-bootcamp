//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const pic = document.querySelector('img')
 

document.querySelector('button').addEventListener('click',getData)


function getData(){
    let val = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=SeLQkhhchJhFLIv4GtWfBdbq6ghjiyc7q8Gn9sVc&date=${val}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.hdurl !=='image'){
                pic.src = data.hdurl
            }else{
                document.querySelector('iframe').url = data.hdurl
            }

            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            
        })

        .catch(err =>{
            console.log(err)
        })
    
}