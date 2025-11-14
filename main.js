//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


// user inputs a date in YYYY-MM-DD format
// when they enter date, it fetches nasa API
// make sure to put date.value inside function
// fetch url
// get title and explanation
// condition if the result is an image then show image, otherwise set a link for the video
// catch any errors 

/*
i had an issue where i would go to a video, then image, then video then the image wouldn't show up and thats 
because the display none property on the image did not go away, so when an image is present,
i will always make it a block level element

*/

document.querySelector("button").addEventListener("click", getPicture);

function getPicture() {
  const date = document.querySelector("input").value;
  const apiKey = "L8lb6rV939GuBg4Xr1LdIdwPum5YKH7pSxLeveQW";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector("h2").innerText = data.title;

      document.querySelector("h3").innerText = data.explanation;

      // If it's an image, show it! If it's a video (YouTube link), embed it inside a tag.
      if (data.media_type === "image") {
        document.querySelector("img").src = data.url;
        document.querySelector("img").style.display = "block";
      } else if (data.media_type === "video") {
        document.querySelector("img").style.display = "none";
        document.querySelector("h3").innerHTML =
          `<a href="${data.url}" target="_blank">Watch the video here</a><br><br>` + data.explanation;
      }
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
