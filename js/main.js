//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", getPicture);

function getPicture() {
  let date = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=6ZarupdqfWuF02HbqeEaoenFbFsbSK8I1XQDr6KL&date=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.getElementById("vidHidden").style.display = "none";
        document.getElementById("imgHidden").style.display = "block";
        document.querySelector("img").src = data.hdurl;
      } else if (data.media_type === "video") {
        document.getElementById("imgHidden").style.display = "none";
        document.getElementById("vidHidden").style.display = "block";
        document.querySelector("iframe").src = data.url;
      }
      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
