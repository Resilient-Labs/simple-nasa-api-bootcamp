# NASA Picture/Video of the Day 🌌✨

### Description
Explore captivating images and videos related to astronomy with this app, which:
- Fetches data from <a href="https://api.nasa.gov/">NASA's Astronomy Picture of the Day (APOD) API</a>.
- Dynamically displays an image or video, along with its title and caption, based on the selected date.
- Features a shooting star animation in the background.

Check out the app <a href="https://xsarahyu.github.io/simple-nasa-api-bootcamp/">here</a>!

<img src="nasa-potd.png.png">

### Tech Used
- HTML
- CSS
- JavaScript

### Lessons Learned
- Use of ```<iframe>``` to embed another HTML page into the current one. Here, I used it to display videos from the NASA API on my page.
- How to limit a date input in HTML to the current date and to the first date accessible.
- How to create a shooting star animation in CSS.
- Use of the change event, which fires when the user modifies the element's value. In this case, I used it in lieu of a submit button to cause a date change to trigger a new picture/video.