


const grabImage = (year, month, day) => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=OyiOGKavqdMNu1VTL89VZXpja3N5EK0myYfE6hma&date=${year}-${month}-${day}`)
    .then(res => res.json())
    .then(response => {
      if (response.media_type ==="image"){
        document.querySelector('img').src = response.url
        document.querySelector('iframe').src = ""
        document.querySelector('iframe').height = "0"
        document.querySelector('iframe').width = "0"
      }else{
        document.querySelector('iframe').src = response.url
        document.querySelector('iframe').height = 500
        document.querySelector('iframe').width = "100%"
        document.querySelector('img').src = ""
      }
      document.querySelector('h4').textContent = response.title
      document.querySelector('span').textContent = response.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
        // alert("sorry, there are no results for your search")
    });
};


//This gets the current date always
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

/*and here it grabs the current date decided above and puts it into the format
needed for the API to display the current date's image*/
grabImage(yyyy, mm, dd )



document.querySelector('button').addEventListener('click', (e) => {
 const yearValue = document.querySelector('input[name="year"]').value //2019
 const monthValue = document.querySelector('select[name="month"]').value //11
 const dayValue = document.querySelector('select[name="day"]').value //03

grabImage(yearValue, monthValue, dayValue)

 if (monthValue == 2 && dayValue > 28 && yearValue %4 !==0 || monthValue == 2 && dayValue > 29 && yearValue %4 ==0) {
  alert ("This date doesn't exist")
}
else if (yearValue.length > 4 || yearValue.length < 4){
  alert ('This is not a valid year')
}
else if (yearValue > yyyy && monthValue > mm  || yearValue > yyyy && dayValue > dd) {
  alert ("You can't see into the future. Stop")
}

});
