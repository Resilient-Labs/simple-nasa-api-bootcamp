//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//event listener for the get date button
document.querySelector('button').addEventListener('click', run)
function run() {
    //name var
    let starName = document.querySelector('h2')
    //image var
    let image = document.querySelector('img')
    //video var
    let vid  = document.querySelector('video')
    //Description Var
    let result = document.querySelector('h3')
    //var for input
    const input = document.querySelector('input').value

    const apiKey = 'HraYRkixsOLxurkHhYpiOBycBigLJgnemjSuhiOt'
    const url = `https://api.nasa.gov/planetary/apod?date=${input}&api_key=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            starName.innerText = data.title
            if(data.media_type === 'video'){
                vid.src = data.hdurl
            }else{
                image.src = data.hdurl
            }
            result.innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

