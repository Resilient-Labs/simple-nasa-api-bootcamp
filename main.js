const NASA_API_KEY = ""; // ADD KEY

document.getElementById("submit").onclick = getImage;

function getImage() {
  const date = document.getElementById("date").value;

  const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;

  fetch(nasaURL)
    .then((res) => res.json())
    .then((data) => {
      // Comment out fetch call and use object below for testing to prevent getting rate limited
      // const data = {
      //   copyright: "\nBrian Meyers\n",
      //   date: "2025-10-01",
      //   explanation:
      //     "Ten thousand years ago, before the dawn of recorded human history, a new light would suddenly have appeared in the night sky and faded after a few weeks.  Today we know this light was from a supernova, or exploding star, and record the expanding debris cloud as the Veil Nebula, a supernova remnant.  This sharp telescopic view is centered on a western segment of the Veil Nebula cataloged as NGC 6960 but less formally known as the Witch's Broom Nebula.  Blasted out in the cataclysmic explosion, an interstellar shock wave plows through space sweeping up and exciting interstellar material. Imaged with narrow band filters, the glowing filaments are like long ripples in a sheet seen almost edge on, remarkably well separated into atomic hydrogen (red) and oxygen (blue-green) gas. The complete supernova remnant lies about 1400 light-years away towards the constellation Cygnus. This Witch's Broom actually spans about 35 light-years. The bright star in the frame is 52 Cygni, visible with the unaided eye from a dark location but unrelated to the ancient supernova remnant.",
      //   hdurl: "https://apod.nasa.gov/apod/image/2510/WitchBroom_Meyers_6043.jpg",
      //   media_type: "image",
      //   service_version: "v1",
      //   title: "Astronomy Picture of the Day",
      //   url: "https://apod.nasa.gov/apod/image/2510/WitchBroom_Meyers_1080.jpg",
      // };

      // Add photo title to DOM
      document.querySelector("h2").innerText = data.title;

      // Remove image/video from DOM if present
      document.querySelector("img")?.remove();
      document.querySelector("iframe")?.remove();

      // media_type 'other' = no media, 9/15/25
      // media_type 'image' = most dates
      if (data.media_type === "image") {
        const img = document.createElement("img");
        img.src = data.url;
        document.getElementById("img-container").appendChild(img);
      }

      // media_type 'video' = 9/14/25
      if (data.media_type === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = data.url;
        iframe.width = 300;
        document.getElementById("iframe-container").appendChild(iframe);
      }

      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => console.error(err));
}
