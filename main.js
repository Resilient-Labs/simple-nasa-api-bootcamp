var sendDate = document.getElementById('Submit')

sendDate.addEventListener('click', function (event) {
  document.querySelector("iframe").src=""
  var dateControl = document.querySelector('#date[type="date"]');
  var dateValue = dateControl.value
  let dateToString = dateValue.toString()
  let api = 'https://api.nasa.gov/planetary/apod?api_key=S8TOOLEhHCXpUYTzV4Qp6ue0yN9gtCbTdLCOKxfI&date='
  getImg(api,dateToString)
});

function getImg (api,dateToString){
fetch(api+dateToString)
.then(res => res.json())
.then(response => {
  if(response.media_type === "image"){
    document.querySelector("#displayImg").style.zIndex = "1"
    document.querySelector("#video").style.zIndex = "0"
    document.querySelector("#displayImg").src=response.hdurl;
  }else{
    console.log(response)
    document.querySelector("#video").style.zIndex = "1"
    document.querySelector("#displayImg").style.zIndex = "0"
    document.querySelector("#video").src=response.url;
  }
});
}

// let api = https:api.nasa.gov/planetary/apod?api_key=S8TOOLEhHCXpUYTzV4Qp6ue0yN9gtCbTdLCOKxfI&date='dateToString
//
//
// fetch('https://api.nasa.gov/planetary/apod?api_key=S8TOOLEhHCXpUYTzV4Qp6ue0yN9gtCbTdLCOKxfI&date='dateToString)
// .then(res => res.json())
// .then(response => {
//   document.querySelector("img").src=response.hdurl;
// });
//
//
