//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  // console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=jgcKc40NZXz1AhbfXzsy7dxzcBjxB5OYHhiXaonA&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector("h1").innerText = `Date: ${data.date}`;
      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;

      if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        console.log("iframe working");
        if (document.querySelector("iframe").classList.contains("hidden")) {
          document.querySelector("iframe").classList.remove("hidden");
          document.querySelector("img").classList.add("hidden");
          // console.log("iframe revealed, img hidden");
        }
      } else if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        console.log("img working");
        if (document.querySelector("img").classList.contains("hidden")) {
          document.querySelector("img").classList.remove("hidden");
          document.querySelector("iframe").classList.add("hidden");
          // console.log("img revealed, iframe hidden");
        }
      }
    })
    .catch((err) => {
      // console.log(`error${err}`);
    });
}
