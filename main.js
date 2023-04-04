// fetch(
//   ``
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });



document.querySelector('button').addEventListener('click', search)

function search(){
   let date = document.querySelector('input').value
   console.log(date)

fetch(`https://api.nasa.gov/planetary/apod?api_key=YsALwBUQ21KrttBcaPkKAFtqgenecOn6wsC7gtrX&date=${date}&thumbs=true`)
.then(res=> res.json())
.then(data=>{
    console.log(data)
    document.querySelector('#result').innerHTML = 
    `<p>${data.explanation}</p>
    <img src="${data.url}" alt=>
  `
})

}

