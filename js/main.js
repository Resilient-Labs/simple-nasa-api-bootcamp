document.querySelector("button").addEventListener("click", check);
function check() {
  let dateValue = "";
  dateValue = document.querySelector("input").value;
  document.querySelector("#picFrame").classList.remove("disp");
  document.querySelector("#phoneImg").classList.remove("disp");
  document.querySelector("#phoneVid").classList.remove("disp");
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=e10xOlxBuEZ2T6TFxlJ0w4fzF9NALXVpKV008WBO&date=" +
      dateValue
  ) //request to take object from url
    .then((res) => res.json()) //turn object into json for legibility
    .then((data) => {
      //take data
      console.log(data); //log value of object's message key
      if (data.media_type === "image") {
        document.querySelector("img").classList.add("disp");
        document.querySelector("img").src = data.hdurl;
      } else {
        document.querySelector("iframe").classList.add("disp");
        document.querySelector("iframe").src = data.url;
      }
      document.querySelector("h2").innerText = `${data.title}`;
      document.querySelector(
        "p"
      ).innerText = `Description: ${data.explanation}`;
    })
    .catch((err) => {
      //catch the error (err is a variable)
      console.log(`error ${err}`); //and log the error
    });
}
