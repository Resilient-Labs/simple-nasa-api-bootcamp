const key = 'WYGg8Zwt3nEabn0rT5txzuB4aopp9RqSXBUZRViI'
let inDate

document.querySelector(`#btn-submit`).addEventListener("click", getDate)

function getDate(){


    let sec = document.querySelector(`#content`)

  
    if(sec.hasChildNodes() === true){ //removes all children from sec
      
      while (sec.firstChild) {
        sec.removeChild(sec.lastChild);
      }
  
    }

 inDate= document.querySelector(`input`).value

 

 const selectedDate= new Date(`${inDate}T00:00:00`)
 var today = new Date()

 if (selectedDate.getTime()> Date.now()){       // conditional for if the date is beyond the current date

     alert(`Enter a date before ${today.getMonth} ${today.getDate}, ${today.getFullYear}`) //* the object is empty for some reason
    return
 }

 getData()

}


function getData(){
    fetch (`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inDate}`)

    .then(msg => msg.json()) 

    .then(response => {

        let dataImg = response.hdurl
        let dataVideo = response.url
        let dataDate = response.date

    if (response.media_type === `image`){

        formatResponseImg(dataImg,dataDate)

    } else if (response.media_type ===`video`){
    
        formatResponseVideo(dataVideo,dataDate)

    }
    
    })

    .catch(err => {

        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}

function formatResponseImg(dataImg,dataDate){
    let imgDate = document.createElement(`span`)
    imgDate.textContent = dataDate
    imgDate.style.color =`yellow`
    let imgbg = document.createElement(`section`)
    imgbg.src = dataImg
    imgbg.classList.add(`apiImg`)
    imgbg.style.backgroundImage = `url(${dataImg})`
    imgbg.appendChild(imgDate)
    document.querySelector(`#content`).appendChild(imgbg);
}
function formatResponseVideo(dataVideo,dataDate){
    let video = document.createElement(`iframe`)
    video.src = dataVideo
    video.width = '400'
    video.height = '300'
    video.style.border = '1px solid yellow'
    video.style.marginLeft = '35%'
    document.querySelector(`#content`).appendChild(video);
 console.log("Its a video")

}



  