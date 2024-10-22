document.querySelector("button").addEventListener("click", getPicture);

function getPicture() {
  const userInput = document.querySelector("input").value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // input for name
      document.querySelector("h2").innerText = data.title;

      if (data.media_type === "image") {
        document.querySelector("img").src = data.url;
        document.querySelector("img").alt = data.title;
      } else {
        document.querySelector("iframe").src = data.url;
      }
      // Input for description
      document.querySelector("p").innerText = data.explanation;

      //  console.log(data);
      // console.log(data.title);
      // console.log(data.date);
      // console.log(data.url);
      // console.log(data.explanation);
      // console.log(data.media_type)
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
