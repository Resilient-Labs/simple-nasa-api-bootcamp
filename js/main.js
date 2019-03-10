//  "dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD"
//"https://api.nasa.gov/planetary/apod?api_key=dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD"


document.querySelector('form').addEventListener('submit', nasa)  

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)



fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD`)

    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response) 
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else{
          document.querySelector('iframe').src = response.url
        }
        
    })

    
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}

// fetch("https://api.nasa.gov/planetary/apod?api_key=dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response.drinks[0].strDrink)
//     })
    
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });



// fetch("https://api.nasa.gov/planetary/apod?api_key=dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response.drinks[0])
//         response.drinks.forEach(el => {
//           imgArr.push(el.strDrinkThumb)
//         })
//         
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });


//     document.querySelector('form').addEventListener('submit', nasa)  

// function nasa(e){
//   e.preventDefault()
//   let date = document.querySelector('input').value
//   console.log(date)
//   fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key= dlR6evZ5FaLZxa1AtKNo6TTxQ11UCJ5aaalk0OhD`)
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response)
//         if(response.media_type == "image"){
//           document.querySelector('img').src = response.hdurl
//         }else{
//           document.querySelector('iframe').src = response.url
//         }
        
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });
// }