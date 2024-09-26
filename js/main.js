//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/









document.querySelector('button').addEventListener('click', getPicture)





function getPicture() {

    const starDay = document.querySelector('#starday').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=koFLfcMICC09xN0rZGkXZhlnLKjTMgFxj3Eknmk2&date=${starDay}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            // console.log(data.message)
            document.querySelector('img').src = data.url //currently asking for imgs but can get other types of media can use media_type property for that can also use iframe for this
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
            //console.log(err)

            //document.querySelector('h2').innerText = err
        });



    console.log("The date passed in was:", starDay);

}

