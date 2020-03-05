const key = 'WYGg8Zwt3nEabn0rT5txzuB4aopp9RqSXBUZRViI'
let date

document.querySelector(`#submit`).addEventListener("click", (e) =>{
 //e.preventDefault()
 getDate()
})

function getDate(){
 date = document.querySelector(`input`).value
 console.log(date)

 //add conditional for if the date is beyond the current date
 getData()

}
function getData(){
fetch (`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)

.then(msg => msg.json()) 

.then(response => {
    console.log(response)

   if (response.media_type === `image`){

    let dataImg = response.hdurl
    let dataDate = response.date
   // let dataQuote = response.explanation
    formatResponseImg(dataImg,dataDate)
    
   } else if (response.media_type ===`video`){
        let dataVideo = response.hdurl
        dataDate = response.date
        // dataQuote = response.explanation
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
    imgDate.style.color =`white`
    let imgbg = document.createElement(`section`)
    imgbg.src = dataImg
    imgbg.classList.add(`apiImg`)
    imgbg.style.backgroundImage = `url(${dataImg})`
    imgbg.appendChild(imgDate)
    document.querySelector(`#content`).appendChild(imgbg);
}
function formatResponseVideo(dataVideo,dataDate,dataQuote){
    let imgDate = document.createElement(`span`)
    let img = document.createElement(`img`)
    img.src = dataImg
    img.classList.add(`apiImg`)
    document.querySelector(`#content`).appendChild(img);


}



  