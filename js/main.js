//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



// user can enter the date & the user can get the picture of the date
// Nasa api



document.querySelector('button').addEventListener('click', getPicture)
// document.querySelector


function getPicture(){

            // Incorrect query use
    //     https://api.nasa.gov/planetary/apod?date=${start_date}&api_key=1yGwa9T1neVpoOnbSbmzKmHgjyrm7BGcd5anK0su
        let date = document.querySelector('input').value 
fetch(`https://api.nasa.gov/planetary/apod?api_key=1yGwa9T1neVpoOnbSbmzKmHgjyrm7BGcd5anK0su&date=${date}`) 
         .then(res => res.json()) // parse response as JSON 
         .then(data => { 
            console.log(data.url)

            if( data.media_type === "image"){                //IT IS POSSIBLE TO TARGET OBJECTS DIRECTLY IN A IF ELSE!!!
                document.querySelector('img').src = data.url
            }else if(data.media_type === "video"){ 
                document.querySelector('iframe').src = data.url
            }
        
            //First thought process create a blank div that stores the iframe to host the url 
            //create a iframe for the video & let the source be the url object
            // let video = document.createElement('iframe')
            // video.innerHTML = url
            // document.querySelector('.videoSection').src = url

            // if{

            // }else{
            //    iframe.src = url

            // }


        //    console.log(data.message) 
           document.querySelector('img').src = data.url
           document.querySelector('h2').innerText = data.title
           document.querySelector('h3').innerText = data.explanation
           console.log(data)
        //    document.querySelector('h2').innerText = data.url
        }) 
        


        //IFRAME for video

        //Error Catcher
//     .catch(err => { 
//         console.log(`error ${err}`) 
//     }); 
}




    // function userValue(){
    //     const userValue = document.querySelector('input').value
    //     console.log(userValue)
    //     }
        