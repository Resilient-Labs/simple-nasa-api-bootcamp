// let userAnswer = prompt("apod")
let image = document.querySelector('img');
let video = document.querySelector('iframe');
image.height = 565;
image.width = 665;


  function UpdateParam(){   //this is the function that will fire off when things are selected. the individual year month day the addEventListener section will be lower.
    console.log("fired event")
    let year = document.querySelector("#Year").value;
    let month = document.querySelector("#Month").value;
    let day = document. querySelector("#Day").value;
    assignImageDate(year, month, day)

  }


  function assignImageDate(year, month, day){       //this is teh function and parameters, the fetch comes from nasa. the temperal literal is for a day and month that will be changed.
fetch(`https://api.nasa.gov/planetary/apod?api_key=Q8rLR1sdbKa9szOHvD1Ij3S2iOyu7hjKP15RVefV&date=${year}-${month}-${day}`)
  .then(res => {return res.json()}) //jason makes it so i can access the info
  .then(response => {
    console.log(response)
    if(response.media_type === "image"){
      image.src = response.url;
      video.style.display = "none"
    } else {
      video.style.display = "block"
      video.src = response.url;
      image.src = ""
    }


  })
  }
  assignImageDate(2018, 04, 08)
  document.querySelector("#Year").addEventListener("change",UpdateParam)              //these are adding new addEventListeners to year month and day. when i click on the year month or day the picture will change.
  document.querySelector("#Month").addEventListener("change", UpdateParam)
  document.querySelector("#Day").addEventListener("change", UpdateParam)


  // assignImageDate(2018, 04, 08)
  // document.querySelector("#month").addEventListener("change", function(){
  //   console.log("fired event")
  //   let year = document.querySelector("#Year").value;
  //   let month = document.querySelector("#Month").value;
  //   let day = document. querySelector("#Day").value;
  //   assignImageDate(year, month, day)


     let year = document.querySelector("#Year").value;
     let month = document.querySelector("#Month").value;     //the variables that show what the year month and day values are.
     let day = document. querySelector("#Day").value;       //everything is out of order because certain things need to be moved in order to fire.
