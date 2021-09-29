//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//edge cases - dates not included, videos will pop up, 
document.querySelector('button').addEventListener('click', getPicOfTheDay)
// document.querySelector('iframe').style.display = 'none'
// window.addEventListener('load', (newPage) => {
//     document.querySelector('iframe').style.display = 'none'
// });

function getPicOfTheDay() {

    let val = document.querySelector('input').value
    const urlNasa = `https://api.nasa.gov/planetary/apod?api_key=xTNPAIEci25JC2DNB8p2AibY04nWWyonFKdCN0Nz&date=${val}`

    fetch(urlNasa)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.msg) {
                document.querySelector('h3').innerText = data.msg
                document.querySelector('h2').innerText = ""
                document.querySelector('iframe').hidden = true
                document.querySelector('img').hidden = true
            } else {
                if (data.media_type === "image") {
                    document.querySelector('img').src = data.url
                    document.querySelector('img').hidden = false
                    document.querySelector('iframe').hidden = true

                } else if (data.media_type === "video") {
                    document.querySelector('iframe').src = data.url
                    document.querySelector('iframe').hidden = false
                    document.querySelector('img').hidden = true
                }
                document.querySelector('h3').innerText = data.explanation
                document.querySelector('h2').innerText = data.title
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
