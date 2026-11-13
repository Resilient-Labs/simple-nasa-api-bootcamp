# NASA Picture of the Day

Enter a date and see NASA's Astronomy Picture of the Day for that date.

A small front-end exercise from the 100Devs bootcamp: a single page that fetches from NASA's API and shows the photo, its title, and its description.

## What it does

- Takes a date from the user (month/day/year) and fetches NASA's picture of the day for that date.
- Shows the picture's title, the image itself, and NASA's explanation.

## Tech stack

- HTML, CSS, JavaScript (no build step, no server)
- NASA Astronomy Picture of the Day API (`science.nasa.gov` APOD endpoint)

## How to run it

Open `index.html` in a browser, type a date, and click **Get Picture**. No API key or install step is needed.

## Project structure

```
index.html         - date input, button, and the title / image / description it fills in
css/style.css      - page styling
css/normalize.css
css/reset.css
js/main.js         - date handling and the fetch to NASA's APOD API
img/               - images used by the page styling (not screenshots)
```

---

Thay Brown — thaybrown22@gmail.com · https://thaythecoder.netlify.app · https://github.com/tbrown320 · https://www.linkedin.com/in/thaybrown
