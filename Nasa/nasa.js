document.querySelector('button').addEventListener('click', getPicture)


function getPicture(){ 
    let dateToday = document.querySelector('input').value
let url = `https://api.nasa.gov/planetary/apod?api_key=lLOwezabBZuuniie0brweFo5I4O1XjIasyp1yJvZ&date=${dateToday}`

fetch(url)
.then(res => res.json()) 
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('img').src = data.url
    
  
})
.catch(err => {
    console.log(`error ${err}`)
});
}