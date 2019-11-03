const button = document.querySelector('button')
let api ='f0QcH6nlZjMplBMcTTNL1QAiPk0tNJtjjAqSc2sI'


button.addEventListener('click',()=>{
  const input = document.querySelector('input').value
fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${input}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
    if(response.media_type == 'image'){
      document.querySelector('img').src = response.hdurl
    }else{
      document.querySelector('iframe').src = response.url
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
