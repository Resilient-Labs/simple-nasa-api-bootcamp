//  Worked with garderner gang
//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getData);

function getData() {
  let date = document.querySelector("input").value;
  let apilink = `https://api.nasa.gov/planetary/apod?api_key=yiS5UJR1JFjt866yoAwj0TUHT6izIidF8pOFxSvc&date=${date}`;
  fetch(apilink)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.url;
      document.querySelector("h3").innertext = data.explanation;
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
