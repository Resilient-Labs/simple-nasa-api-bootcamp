document.querySelector('button').addEventListener('click', getNasa)

function getNasa(){
    //document.querySelector('iframe').src = ''
    document.querySelector('img').src = ''
    const inputDate = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=8UFvxaQOoXbj12telfgUsLG4UGzDFFrtQwskPW5K
&date=${inputDate}`

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title            
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation    
            if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
            }else{
                document.querySelector('iframe').src = data.url
            }        
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// my api code 8UFvxaQOoXbj12telfgUsLG4UGzDFFrtQwskPW5K
