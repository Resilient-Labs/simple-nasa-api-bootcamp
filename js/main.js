const grabImage = (year, month, day) => {
fetch(`https://api.nasa.gov/planetary/apod?api_key=bXoVlRGJe8N7w4D4fweO0Fzkg3D49BjvYjxuJphw&date=${year}-${month}-${day}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // let imgUrl = []
      // debugger
      if (response.media_type ==="image"){
        document.querySelector('img').src = response.url
        document.querySelector('iframe').src = ""
        document.querySelector('iframe').height = "0"
        document.querySelector('iframe').width = "0"
        debugger
      }else{
        document.querySelector('iframe').src = response.url
        document.querySelector('iframe').height = 500
        document.querySelector('iframe').width = "100%"
        document.querySelector('img').src = ""
      }
      document.querySelector('h1').textContent = response.title
      document.querySelector('p').textContent = response.explanation

    })
    .catch(err => {
        console.log(`error ${err}`)
        // alert("sorry, there are no results for your search")
    });
};

grabImage('2020', '03', '03')

document.querySelector('button').addEventListener('click', (e) => {
 const yearValue = document.querySelector('input[name="year"]').value //2019
 const monthValue = document.querySelector('select[name="month"]').value //11
 const dayValue = document.querySelector('select[name="day"]').value //03

grabImage(yearValue, monthValue, dayValue)

});
