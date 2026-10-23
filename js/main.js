//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


        let inputDate = document.querySelector('input').value

        console.log(inputDate)

        document.querySelector('#potd').style.display = 'none'
        document.querySelector('video').style.display = 'none'

 document.querySelector('button').addEventListener('click', nasaPics )
 function nasaPics() {

        let inputDate = document.querySelector('input').value
        let date = inputDate.split("-").join("").slice(2)
        console.log(date)

        fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${date}`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerHTML = data.explanation


        if(data.media_type == "image"){
         
         document.querySelector('#potd').src = data.hdurl
         document.querySelector('#potd').style.display = 'block'
         document.querySelector('video').style.display = 'none'
        
         
        }else if(data.media_type == "video"){

                let basic_html = data.basic_html
                let virtualDom = new DOMParser()
                let newDom = virtualDom.parseFromString(basic_html, 'text/html')
                document.querySelector('video').src = newDom.querySelector('source').src

                document.querySelector('#potd').style.display = 'none'
                document.querySelector('video').style.display = 'block'

        }


    
    })
} 

