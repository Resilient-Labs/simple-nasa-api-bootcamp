// Api


const API = 'aOBpziLRPFagJq7dNZ0BaoS33qILiBaj9PBCl3fq'

const img = document.querySelector('img')
const iframe = document.querySelector('iframe')
const input = document.querySelector('input')
const submit = document.querySelector('button').addEventListener('click', placeImgOrVid)

function placeImgOrVid(){


    let date = input.value
    console.log(date)
    
    iframe.src = ''
    img.src = ""
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.media_type === 'video'){
                iframe.src = data.url
            }else {
                img.src = data.hdurl  
            }




        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
    
}
