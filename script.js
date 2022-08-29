//lazy css will update later

document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let pictureVal = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=rtagjG0Ny60oOKbihnldwLi8r5ob9Zk1hkmAhoTC&date=${pictureVal}`

//add &date to set date parameters 
fetch(url)
.then(res => res.json())
.then(date => {
        console.log(date)
        document.querySelector('h2').innerText = date.title
        document.querySelector('img').src = date.url
        document.querySelector('h3').innerText = date.explanation
})
.catch(err => {
    console.log(`error ${err}`)
});
}

//lines 13-16, why we're changing it: we are starting off with date (date is object). date/drinks are parameters (can be called anything.) this will give us back an object. (we console logged to see everything that is in the ojbect. once you see the different properties, you go and pick out which ones you want to display. you wanted the title of the date, url, and explanation. the iamge source was under the url. why this is different than the drinks, is because when we console logged the object in that API, the data is stored differently. for drinks we went into the array to pull out name, image, instructions. )