/* api key:  
 https://api.nasa.gov/planetary/apod?api_key=Mjy1bxuNx42ZPiJ3qncUBIGu1JouiLwPkbFULRCU
*/

//listener
document.querySelector("#submit").addEventListener("click", userInput);
//
let image = document.querySelector(".nasa-image")
let title = document.querySelector(".nasa-title")
let dateMade = document.querySelector(".nasa-date")

//gets date and 
function userInput(event) {
    //stops refreshing on submit, Shout on Leon
    event.preventDefault()
    //I am grabbing the user input date
    date = document.getElementById("date-info").value
    console.log(date)

    let key = "Mjy1bxuNx42ZPiJ3qncUBIGu1JouiLwPkbFULRCU"
    
    //fetch api
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        title.innerHTML = data.title
        dateMade.innerHTML = data.date
        image.src = data.url
        

        
        // displayPicture(data)
    })



}