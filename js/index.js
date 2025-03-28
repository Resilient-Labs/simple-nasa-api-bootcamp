document.querySelector('input[type=button]').addEventListener('click', getDate);


function getDate(){
    let title = document.querySelector("h1");
    let dateValue = document.getElementById("date").value;
    console.log(dateValue)
    if(dateValue != ""){
        let imagePlanet = document.querySelector("#planetImage");
        let videoPlanet = document.querySelector("video");
        let key = '9dgFWmFdQmLi2AiecXKWd31j0gHTkGYbc56tcr79' ;
        let description = document.querySelector("p")

        fetch((`https://api.nasa.gov/planetary/apod?api_key=6U7T5fs4cPRziVMFwPd5aBrTeORgO9zqLmiGgOtJ&start_date=${dateValue}&end_date=${dateValue}`))
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            let objectMedia = data[0].media_type;
            let srcMedia = data[0].url;
    
            title.innerHTML = data[0].title.toUpperCase();
            description.innerHTML = data[0].explanation;
            console.log(objectMedia)
            if(objectMedia == "image"){
                imagePlanet.style.display = 'flex'
                imagePlanet.src = `${srcMedia}`
            }
            else if(objectMedia = "video"){
                videoPlanet.style.display = "flex";
                videoPlanet.src = `${srcMedia}`;
            }
    
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

