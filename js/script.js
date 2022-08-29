let searchButton = document.querySelector('#searchButton')
// Add an event listener that runs the function send api Request when it is clicked
searchButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest()
})

//an asynchronous function to fetch data from the API
async function sendApiRequest(){
    let API_KEY = "LGjdpXmD5E5VdJ98n7v48Z6Up7tfC8OuzmgjkCbx"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

//function that does something with the data received from te API. The name of the function should be customized to whatever you are doing with

function useApiData(data){
    document.querySelector('#apiInput').innerText += data.explanation
    document.querySelector('#apiInput').innerHTML += `<img src="${data.url}">`
}