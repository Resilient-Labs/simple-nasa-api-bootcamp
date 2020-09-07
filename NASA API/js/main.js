let searchButton = document.querySelector("#search")
let inputValue = document.querySelector("input").value;
//Add an event listener to the button that runs the function sendApiRequest when it is clicked

searchButton.addEventListener('click', sendApiRequest);
//An asynchronous function to fetch data from the API.
function sendApiRequest(){

 inputValue=document.querySelector("input").value.toString();
 fetch(`https://api.nasa.gov/planetary/apod?api_key=5F7K9eae64V42ZwNPI7AnxMWQfXPDIQxd2FG2bHC&date=${inputValue}`)
    .then(response => response.json())
    .then(data =>
      {useApiData(data);console.log(inputValue)
      console.log(data)})
  console.log(inputValue)
}
//function that does something with the data received from the API.
function useApiData(data){
  document.querySelector("p").innerHTML = data.explanation

  //allows the functions to either display the img or the video being displayed
  if(data.media_type=="video"){
    document.getElementById("bottomImg").style.display="none"
    document.querySelector("iframe").style.display="block"
    document.querySelector('iframe').src = data.url;
  }
  else{
    document.querySelector("iframe").style.display="none"
    document.getElementById("bottomImg").style.display="block"
    document.getElementById("bottomImg").src = data.url;
    //clear iframe src
  }
console.log(data.url)
}
