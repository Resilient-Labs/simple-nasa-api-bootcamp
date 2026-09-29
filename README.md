# Simple NASA API

A lightweight web app that lets users pick a date and view NASA's Astronomy Picture of the Day (APOD) for that date. The app displays either an image or a video along with the title and description.

## Features

- Date picker for selecting a date
- Fetches APOD data from the NASA API
- Renders the image or video returned by the API
- Displays the title and explanation for the selected day
- Simple front-end interface built with HTML, CSS, and JavaScript

## Project structure

- `index.html` — page structure and UI elements
- `css/style.css` — styling for the app
- `js/main.js` — logic for fetching and displaying NASA data



## API usage

This app uses NASA's APOD endpoint:

```text
https://api.nasa.gov/planetary/apod
```

The app includes an API key in the JavaScript file, and it requests data for the selected date using the date query parameter.

## Notes

- NASA's API returns either an image or a video depending on the chosen date.
- If the media is a video, the app displays the video instead of the image.
- Some dates may not have data available or may require a valid API key.

## Technologies used

- HTML
- CSS
- JavaScript
- NASA Open APIs
