let key= 'h5OMsFQKL16tTFtVsgn7czwiiPm51IHwpRWyczeS'


let button=document.querySelector('#button')

button.addEventListener('click',()=>{
let input=document.querySelector('#input').value
  fetch(`https://api.nasa.gov/planetary/apod?date=${input}&api_key=${key}`)

     .then(res=>res.json())
     .then(response =>{
       if(response.media_type==="image"){
         document.querySelector("img").src=response.url
       } else{
         alert("IS not an Image")
       }

     }).catch(err =>{
  alert("sorry,there are no results")
})
})
