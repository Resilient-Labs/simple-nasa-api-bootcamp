//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

 document.querySelector('button').addEventListener('click', photoOfTheDay)
 function photoOfTheDay(){

    const inputDate = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${inputDate}` //hide API later!

    fetch (url)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            document.querySelector('h2').innerText= data.title
            document.querySelector('h3').innerText=data.explanation
            
            
            if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('img').style.display = 'block' //adding styling via JS. You need '' when adding property values in JS 
                document.querySelector('video').style.display = 'none' 

            }else if(data.media_type === 'video'){

                // let basic_html = data.basic_html
                // let newDom = new DOMParser()
                // let videoLink = newDom.parseFromString(basic_html, "text/html")

                document.querySelector('video').src = data.url
                document.querySelector('img').style.display = 'none' //adding styling via JS. You need '' when adding property values in JS 
                document.querySelector('video').style.display = 'display'

            }else{
                document.querySelector('img').src=''
            }
            
        })

}
