//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//need to get the date from the input
document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
    //get the date value from the user input
    let date = document.querySelector('input').value
    console.log(date)
    //split the date format by / so you just have the numbers
    let queryDate = date.split('/')
    console.log(queryDate)

    //assign the numbers to the corresponding variable
    let day = queryDate[1]
    let month = queryDate[0]
    let year = queryDate[2]

    if (month.length === 1) {
        month = '0' + month
    }

    if (year.length === 4) {
        year = year.slice(2)
    }

    console.log(year, month, day)
    //bring the variables together in a new string that can be inserted into the fetch
    let realDate = [year, month, day].join('')
    console.log(realDate)


    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${realDate}`)
        .then(res => res.json())
        .then(space_data => {
            console.log(space_data)

            document.querySelector('h2').innerText = space_data.title
            document.querySelector('img').src = space_data.hdurl
            document.querySelector('h3').innerHTML = space_data.explanation
        })
}

