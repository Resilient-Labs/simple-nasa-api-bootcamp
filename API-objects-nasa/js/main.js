//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// date 02/03/2021 = video 

// date 07/29/2021 = we used for img

document.querySelector('button').addEventListener('click', getNasaPic)

function getNasaPic(){
    let date = document.querySelector('input').value.toLowerCase()
    console.log(date)

    let url = `https://api.nasa.gov/planetary/apod?api_key=311stjG95JxgsssqIL21G6sPGLWFkNRkgk6dYP1y&date=${date}`
    
    // use template string $ to plug variable right in there when you define varialbe above 

    // a. / ?api_key indicates the first parameter &date indicates the query parameter.. 
    //b. when using template literals you can to replace the '' with ``.. 
    // c. json "javascript script object notation"
    fetch(url)
    .then(res => res.json())
    .then (data =>{
        console.log(data)

        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('p').innerText = `Explanation: ${data.explanation}`

        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            const iframe = document.querySelector('iframe')
            iframe.remove()
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
            style.display.media_type.hdurl.none
        }else{
            alert('Media Type is not Supported')
        }

        // ^ found after console logging the function - tied to data object we get back from nasa (it's a property) and conditional allows us to search through media type
    })

    .catch(err => {
        console.log(`error ${err}`)
    })

}
