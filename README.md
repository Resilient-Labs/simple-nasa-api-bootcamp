
# NASA Picture of the Day

A simple web app that lets users pick a date and see NASA's Astronomy Picture of the Day (APOD) for that day, whether it's an image or a video.

## Features

- Choose any date to look up NASA's Astronomy Picture of the Day
- Displays the title, image or video, and explanation for that day
- Handles both image and video results

## Built With

- HTML5
- CSS3
- JavaScript (Fetch API)
- [NASA APOD API](https://api.nasa.gov/)

## Getting Started

1. Clone the repo and switch to the `answer` branch
   ```bash
   git clone https://github.com/sabrinalindev/nasa-api.git
   cd nasa-api
   git checkout answer
   ```
2. Get a free API key at [api.nasa.gov](https://api.nasa.gov/)
3. Replace the API key in `js/main.js`
   ```javascript
   const apiKey = 'YOUR_API_KEY'
   ```
4. Open `index.html` in your browser

## Usage

1. Pick a date with the date input
2. Click the button to fetch that day's picture or video
3. Read the title and explanation below the media

## What I Learned

- How to fetch data from a third-party API with `fetch`
- How to handle different response types (image vs. video)
- How to update the DOM with the data returned from an API

