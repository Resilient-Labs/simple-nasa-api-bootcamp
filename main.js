//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//find the api for project and check if it works in postman
// Define the API URL
//start code with event listener
//create my function
//create a fetch inside my function
//get the data console log it to the console and check which data is needded 
//copy the data and create document query to show it in the UI
//add  a catch for the errors
// document.querySelector('button').addEventListener('click',getFetch)
// function getFetch(){
// const choice= document.querySelector('input').value
// const url =`https://api.nasa.gov/planetary/apod?api_key=ZjH3OOdgc91aYdz0ktsPEIpZMRhPcRWMXDrh7Yb5&date=${choice}`

// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//    document.querySelector('img').src =data.hdurl
//     document.querySelector('h3').innerText =data.explanation
//     })
//  .catch(err => {
//     console.log(`err ${err}`)
//  });   


// }
// document.querySelector('button').addEventListener('click',getFetch)

// function getFetch(){
//     const choice= document.querySelector('input').value
//     const url =`https://api.nasa.gov/planetary/apod?api_key=ZjH3OOdgc91aYdz0ktsPEIpZMRhPcRWMXDrh7Yb5&date=${choice}`


//     fetch(url)
//         .then( res => res.json())                          
//         .then(data =>{
//             console.log(data)
//             document.querySelector('img').src = data.hdurl
//             document.querySelector('h3').innerText = data.explanation
//         })
//         .catch(err =>{
//             console.log(`err${err}`)
//         });
//     }
document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
    const choice=document.querySelector('input').value
    const url=`https://api.nasa.gov/planetary/apod?api_key=ZjH3OOdgc91aYdz0ktsPEIpZMRhPcRWMXDrh7Yb5&date=${choice}`  
    
    
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.media_type === 'image'){
document.querySelector('img').src=data.hdurl
document.querySelector('iframe').src='';
        }else if(data.media_type === 'video'){
       
         document.querySelector('iframe').src=data.url 
         document.querySelector('img').src='';
         
        }
       document.querySelector('h3').innerText= data.explanation   
       document.querySelector('h2').innerText= data.title 
    })

    .catch(err=>{
        console.log(`err${err}`)
    });

}