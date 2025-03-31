// hLOS5lsaCjoCK6iGvUFp8h0QQJfanWeuumSbOTqT
    let date = document.querySelector('input').value ;
    let launch = document.querySelector('.click').addEventListener('click', catchingStars);


        function catchingStars(){
            fetch(`https://api.nasa.gov/planetary/apod?api_key=hLOS5lsaCjoCK6iGvUFp8h0QQJfanWeuumSbOTqT&date${date}`)
                .then (res => res.json())
                .then (data => {
                    console.log(data)
                    document.querySelector('img').src = data.url
                    document.querySelector('h4').innerHTML = data.explanation
                    document.querySelector('h3').innerHTML = 'Keep looking up—the stars are rooting for you.'
                })
                .catch (err => {
                    console.log(`error ${err}`)
                
                })
        }