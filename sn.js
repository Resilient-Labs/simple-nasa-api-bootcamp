const apiKey = "DEMO_KEY";
const apiUrl = "https://api.nasa.gov/planetary/apod";

const submitBtn = document.querySelector("#submit-btn");
const dateInput = document.querySelector("#date");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", () => {
  const date = dateInput.value;
  const url = `${apiUrl}?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { title, explanation, media_type, url } = data;

      let content = "";
      if (media_type === "image") {
        content = `<img src="${url}" alt="${title}" />`;
      } else if (media_type === "video") {
        content = `<iframe src="${url}" title="${title}"></iframe>`;
      } else {
        content = "<p>No image or video available for this date.</p>";
      }

      resultDiv.innerHTML = `
        <h2>${title}</h2>
        ${content}
        <p>${explanation}</p>
      `;
    })
    .catch((error) => {
      console.error(error);
      resultDiv.innerHTML = "<p>Oops, something went wrong.</p>";
    });
});
