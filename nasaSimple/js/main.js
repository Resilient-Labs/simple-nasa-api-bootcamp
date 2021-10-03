//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//

document.querySelector('button').addEventListener('click', getImage)
function findImgUrl(data){
    if(data.thumbnail_url){
        document.querySelector("img").src = data.thumbnail_url;
    }else if(data.hdurl){
        document.querySelector("img").src = data.hdurl
    }
}

function getImage() {
  let date = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=use_your_own_api&date=${date}&thumbs=true`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        if(data.msg){
            document.querySelector("h2").innerText = ''
            document.querySelector("h3").innerText = data.msg
        }else {
            console.log(data);
            findImgUrl(data)
            document.querySelector("h2").innerText = data.title;
            document.querySelector("h3").innerText = data.explanation;}
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });

}
