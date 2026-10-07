# NASA Picture of the Day

Pick any date and get NASA's Astronomy Picture of the Day for it: the title, the explanation, and the actual image. Some days it's a video, and the app handles that too.

![NASA APOD screenshot](screenshot.jpg)

## How the code works

`getNasa()` reads the date input and fetches NASA's APOD endpoint with that date. The response hands back a title, a long explanation, and a URL, which get written into the page's heading, subheading, and image element.

The part I'm happiest with is the media branch, because it's defensive design against a real API quirk. APOD sometimes returns a video instead of a photo, and a naive implementation would just break on those days. The code checks `data.media_type` and shows either the image or an embedded video player, hiding whichever one isn't needed and clearing the old source so they never fight. It's a small thing, but it's the difference between an app that works on picture days and an app that works every day.

The hardest part was that video case. Images are the happy path, but the layout had to survive both without looking broken, so the show/hide logic matters more than the fetch.

Built with HTML, CSS, and vanilla JavaScript. My code is on the `answer` branch.
