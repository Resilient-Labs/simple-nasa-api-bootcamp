let button = document.getElementById('search-btn')
button.addEventListener("click", ()=>{
  let date = document.getElementById("date-input").value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=9DFi11zjvYxmjEmwhvQZDaU2yZMmdKomQiucHo1B&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      document.getElementById('title').textContent = response.title
      document.getElementById('about').textContent = response.explanation
   if (response.media_type === 'video'){
    document.querySelector('iFrame').classList.remove("hide-vid")
    document.querySelector('iFrame').src =response.url;
   } else{
     document.getElementById('img-result').src =response.url;
   }
    })
})
 button.addEventListener("click", (event) =>{
   event.preventDefault()
 })


// Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6

//attempt to make OOP 

//let nasa = {
//     searchBtn: document.querySelector('button'),
//     srcAbout: document.querySelector('about'),
//     fetchImg: () => {
//         const input = document.getElementById('date-input').value;
//         fetch(`https://api.nasa.gov/planetary/apod?api_key=Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6&date=${input}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             if (data.media_type == 'image'){
//                 document.getElementById('img-result').src = data.url;
//             }else if (data.media_type == 'video'){
//                 document.querySelector('iFrame').src = data.url;
//             }      
//         })
    
    
//         .catch(err => {
//             console.log(`error ${err}`);
//         alert("Sorry, no available results for this search");
//         })
//     }
// }

