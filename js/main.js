//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// fetch ('https://api.nasa.gov/planetary/apod?api_key=p5ktc0nkovseDxVH0PvyAZ0qd7A8eOzDdG0q0pO1')

document.querySelector('button').addEventListener('click', getPhotos)

function getPhotos() {
  let date = document.querySelector("input").value;
  // let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=p5ktc0nkovseDxVH0PvyAZ0qd7A8eOzDdG0q0pO1&date=${date}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // document.querySelector("img").src = data.photos[0].img_src;

      document.querySelector("img").src = data.hdurl;
      document.querySelector('h2').innerText = data.title;
      document.querySelector('h3').innerText = data.explanation;

      //   complex fetch is fetch inside of a fetch so one runs before the other
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  

}
