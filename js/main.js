// //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// document.querySelector('button').addEventListener('click', spacePic)
// // document.querySelector('button').addEventListener('click',  () => {
//     // let date = document.querySelector('input').value
//     // let api_key = https://api.nasa.gov/planetary/apod?api_key=9j7nMihbTsoRLR9xxDpDbKNGjIu9FoFaynZOxYjS

//     // const url = `https://api.nasa.gov/planetary/apod?api_key=9j7nMihbTsoRLR9xxDpDbKNGjIu9FoFaynZOxYjS?date=${inputVal}`
// // })


// // let api_key = "20sZnLfE9e2JItPuzngjcceOXsLj7SNSnOk1ueeJ"
// function spacePic(){

//     let date = document.querySelector('input').value
//     let api_key = "anjnqgsfoRIqEUqUojeUu39GSjcnQVB6VhgndTWF"

//     const url = `https://api.nasa.gov/planetary/apod?api_key=anjnqgsfoRIqEUqUojeUu39GSjcnQVB6VhgndTWF?date=${date}`

//     // const inputVal = document.querySelector('input').value
// fetch(url)
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
//         let description = data.explanation
//         let photos = data.url
//         let date =data.date
//         let name = data.title
//         document.querySelector('h3').innerText = description
//         document.querySelector('img').src = photos
//         document.querySelector('#description').innerText = name
     
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// }

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// Worked with House Hayden

document.querySelector('button').addEventListener('click', spacePic)


let apiKey = "NENGoXZGWjNUehbcKnYc9evjg4IrlmgylIz6kFeN"
function spacePic(){

    const inputVal = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=NENGoXZGWjNUehbcKnYc9evjg4IrlmgylIz6kFeN&date=${inputVal}`

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let description = data.explanation
        let photos = data.url
        let inputValue =data.date
        let name = data.title
        document.querySelector('h3').innerText = description
        document.querySelector('img').src = photos
        document.querySelector('.name').innerText = name
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}








