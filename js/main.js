//The user will enter a date. Use that date to get the NASA 
// picture of the day from that date! 
// https://api.nasa.gov/


document.getElementById("get-picture").onclick=getPicture;

function getPicture()
{
    let obtenerFecha=document.getElementById('input-date').value
    console.log(obtenerFecha)
    let html='';

    const url=`https://api.nasa.gov/planetary/apod?api_key=931cMMb7NXhQOspF5fK1IctAfdyKuHV14nHJmuHT
&date=${obtenerFecha}`
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
         //object
        .then((data) => {
            if(data.media_type==='image')
            {
                document.getElementById('name').innerText=data.title  
                console.log(data)
                document.getElementById('nasa-image').src=data.url
                //display(data.url)
                document.getElementById('description').innerText=data.explanation  
            }else if(data.media_type==='video')
                {
                console.log(data)
               html+= `<h2 id="name">${data.title}</h2>
		                
                        <iframe src="${data.url}" frameborder="0"></iframe>
		                <h3 id="description">${data.explanation}</h3>`
                document.querySelector('.show-video').innerHTML = html;
            }
           
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function display(stuff)
{   
    
    document.getElementById('nasa-image').src=stuff
    
}