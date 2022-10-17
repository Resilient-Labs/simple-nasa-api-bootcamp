//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getNasaPics);

function getNasaPics() {
  let date = document.querySelector("input").value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=37EGXi0BUJCqJOfREBAp3bvTFbnGvmI7IhsJeKY4&date=${date}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// hdurl - img
// title - name of image -
// explanation - shows and description
