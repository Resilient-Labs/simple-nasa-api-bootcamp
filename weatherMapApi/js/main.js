document.querySelector('button').addEventListener('click', getTemp)

function getTemp() {

    const country = document.querySelector('#country').value
    const city =  document.querySelector('#city').value
    const url = `http://api.weatherapi.com/v1/current.json?key=a95ab548de894c73b07220619213009&q=${city}&country=${country}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('p').innerHTML = `Currently it is ${data.current.temp_f}&#176 degrees in ${city}.`
            console.log(data.current.temp_f)
            // temp_f
        })
        .catch(err => {
            console.log('error')
        })
}

 //contributors: Shannon, David, Miriam, Alexa & Roxana 

