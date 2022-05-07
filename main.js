//The user will enter a data and get a photo from NASA's API. 

document.querySelector('button').addEventListener('click',getSpacePic)
document.querySelector("iframe");
document.querySelector("iframe").classList.add("toggle")  

function getSpacePic(){
  let picValue = document.querySelector('input').value

  let url = `https://api.nasa.gov/planetary/apod?api_key=MWc1z73URScdbhxGUpusdBlgAmVccf2itcRkLdjT&date=${picValue}`
  
 fetch(url)
 //res= result ---> parse it into JSON syntax ( parse response as JSON)
 .then(res => res.json())
 // data ---> pass the data retrieved into the function 
 .then(data => {
   console.log(data)
   // document.querySelector('h2').innerText=
   // document.querySelector('img').src= 
   // document.querySelector('h3').innerText 
   //  console.log(data.drinks[0])
    document.querySelector('h2').innerText=data.title
    document.querySelector('img').src= data.hdurl
    document.querySelector('h3').innerText =data.explanation 
     if(data.media_type==='image'){
      document.querySelector('img').src = data.hdurl 
     } else if(data.media_type ==='video'){
      document.querySelector("iframe").classList.remove("toggle")
      // let iFrame= document.createElement('iframe')
      // let div= document.querySelector('div')
      // div.appendChild(iFrame)
       document.querySelector('iframe').src = data.url
    }else {
        alert('Unsupported Media Type')
      }
    })
    .catch(err =>{
     console.log(`error ${err}`)
   })
}


//insert iframe toggle feature to display none CSS- within a conditonal for videos 
//reset before function- "reset"- ( before) above the fetch- docu.query selectros from src=image ='' empty string 
//on click reset to empty
