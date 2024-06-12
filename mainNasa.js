//objective get a picture to appear

// document.querySelector("button").addEventListener('click',function(){
//   const inputValue = document.querySelector("input").value
//  //const inputValue = document.querySelector('input[type="date"]')
//  console.log(inputValue)
//
//   //let nasaDate=response.date
//
//   fetch("https://api.nasa.gov/planetary/apod?api_key=t2fqlWlnwtpm6VIB93PI2sF7a04UB0n7Bsm9PMda&date=" + `${inputValue}`)
//   .then(res => res.json())
//   .then(response => {
//   console.log(response)
//   document.querySelector("img").src = response.hdurl
//   document.querySelector("iframe").src = response.url
//
//   })
//
//
//   .catch(err => {
//     console.log(`error ${err}`)
//     alert("no results")
//   });
//
// })
document.querySelector("button").addEventListener('click',function(){
 const inputValue = document.querySelector("input").value
 //const inputValue = document.querySelector('input[type="date"]')
  console.log(inputValue)

 //let nasaDate=response.date

 fetch("https://api.nasa.gov/planetary/apod?api_key=t2fqlWlnwtpm6VIB93PI2sF7a04UB0n7Bsm9PMda&date=" + `${inputValue}`)
 .then(res => res.json())
 .then(response => {
   console.log(response)

  if(`${response.media_type}` === "video"){
    document.querySelector("iframe").src = response.url
  } else{
    document.querySelector("img").src = response.hdurl
  }

 // document.querySelector("iframe").src = response.url
 // console.log(response.url)
 // document.querySelector("img").src = response.hdurl

 })


 .catch(err => {
   console.log(`error ${err}`)
   alert("no results")
 });

})
