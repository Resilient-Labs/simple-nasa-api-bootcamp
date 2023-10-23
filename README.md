# NASA Picture/Video of the Day 🌌✨

### Description
Explore captivating astronomy images and videos with this app, which:
- Fetches data from <a href="https://api.nasa.gov/">NASA's Astronomy Picture of the Day (APOD) API</a>.
- Dynamically displays an image or video, along with its title and caption, based on the selected date.
- Features a 🌠shooting star animation🌠 in the background.

Check out the app <a href="https://xsarahyu.github.io/simple-nasa-api-bootcamp/">here</a>!

<img src="nasa-potd.png">

### Tech Used
- HTML
- CSS
- JavaScript

### Lessons Learned
- Use of `<iframe>` to embed another HTML page into the current one, allowing videos from NASA to display directly on our page.
- Restriction of date inputs to the current date and the earliest accessible date.
- Design of a shooting star animation in CSS.
- Use of the `change` event, which triggers updates when the user modifies an element's value, enhancing user experience. For this project, I used it in lieu of a submit button to dynamically fetch new picture/video content on date changes.