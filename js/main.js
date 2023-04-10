//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic)

function getPic(){
    let select = document.querySelector('input').value


let url = `https://api.nasa.gov/planetary/apod?api_key=eZWxYrQM4QCCDJ5zurNbKBY6zGlqd1FcpM3GC7xk&date=${select}`


fetch(url)
.then(res => res.json()) //get json
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('img').src = data.url

    if(data.media_type == "image"){
        document.querySelector('img').src = data.url
        document.querySelector('img').classList.remove('hidden')
        document.querySelector('iframe').classList.add('hidden')
    }else if(data.media_type == "video"){
        document.querySelector('img').src = data.url
        document.querySelector('img').classList.add('hidden')
        document.querySelector('iframe').classList.remove('hidden')
    }else{
        console.log('unknown type')
    }

})


.catch(err => {
    console.log(`Error ${err}`)
});


}