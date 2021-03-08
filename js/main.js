//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click',nasaPic)


//good practice to give input an id 
function nasaPic(){
    let inputVal=document.querySelector('#inputDate').value
    console.log(inputVal)

    const url=`https://api.nasa.gov/planetary/apod?api_key=1tok7uTSgY7dmqYOP9iD8UT3EWkhDv2Z5FSeIc79&date=${inputVal}`

    //how to turn input value into date value


    //send out url to the api -- request url into the api 
    fetch (url)
    // res= body
    // res.json--> parsing the body text as json-- string converts into json object 
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        document.querySelector('h2').innerText=data.title
        document.querySelector('img').src=data.url
        document.querySelector('h3').innerText=data.explanation
    })
    .catch(err =>{
        console.log(`error${err}`)
    })
}


// difference between this.(object has class) and data.()
//? is query parameter hold values that were gonna use 