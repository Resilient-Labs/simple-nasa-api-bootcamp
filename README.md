# NASA Picture of the Day

A small web app that shows NASA's Astronomy Picture of the Day for any date you pick. Choose a date, click the button, and get the picture, its title, and the explanation.

<img width="1065" height="578" alt="Screenshot 2026-11-12 at 9 18 16 PM" src="https://github.com/user-attachments/assets/34dc0dc5-72a3-448d-bdf8-43131f8d6f5f" />


## Features

- Date picker to choose any day
- Shows the picture, title, and explanation from NASA
- Friendly message when a date has no entry
- Friendly message when the day's entry is a video instead of an image
- Dark, space-style layout that works on mobile and desktop

## How it works

1. You pick a date and click **Get Picture**.
2. The date is converted to NASA's format (`2024-01-15` becomes `240115`).
3. The app fetches that day's entry from NASA's APOD endpoint on science.nasa.gov.
4. The image, title, and explanation are displayed on the page.

No API key is needed.

## Built with

- HTML
- CSS
- JavaScript (Fetch API)

## Run it locally

1. Clone or download the repo.
2. Open `index.html` in your browser.

That's it. There's nothing to install.

## A note on the API

This project started on `api.nasa.gov/planetary/apod`, which now returns the NASA logo for every date. NASA moved APOD to science.nasa.gov, so the app uses the new endpoint:

```
https://science.nasa.gov/wp-json/wp/v2/apod-basic?date_from=YYMMDD&date_to=YYMMDD
```

## What I learned

- Reading API responses in the browser console to find the right fields
- Handling empty results and non-image media
- Converting API data (HTML text to plain text) before showing it on the page
- Debugging a third-party API that changed underneath the project
