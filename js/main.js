//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
//let userAnswer = prompt("the date your looking for")

const button = document.querySelector("button");
const fetchImgFunc = () => {
  const input = document.querySelector("input").value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=FdeIpwdY4T1tPlGZCeYoX8Rw8XU3OYzGinX6Sbtz&date=${input}`
  )
    .then(res => res.json())
    .then(response => {
      if (response.media_type === "video") {
        document.getElementById("video").src = response.url;
        document.getElementById("img").src = "";
      } else {
        document.getElementById("img").src = response.url;
        document.getElementById("video").src = "";
      }
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
};
button.addEventListener("click", fetchImgFunc);
fetchImgFunc();
