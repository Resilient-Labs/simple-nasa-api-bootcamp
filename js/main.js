//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getPic);

function getPic() {
  const choice = document.querySelector("input").value;
  const link = `https://api.nasa.gov/planetary/apod?api_key=1Ey3nqbM2OdiXMsfb0KfWMeqxwbmamQFU7BsIAjs&date=${choice}`;

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, data.url, data.explanation, data.title);

      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("iframe").src = "";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").src = "";
      } else {
        alert("Media not supported chieftin, call NASA");
      }
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = data.title;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
