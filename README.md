# 🚀 Project: Simple NASA API

Enter a date to get NASA's picture/video of the day and its corresponding information back.

**Live Demo:** https://nasa-by-date-jenna-nguyen.netlify.app/ <i>(for display only, still requires an API key for usage)</i>

<img width="939" alt="Simple NASA API" src="https://user-images.githubusercontent.com/88993361/135936186-d317859f-2ffd-4104-94fb-7610b24e2c08.png">

## How It's Made

The application uses a single fetch API to source the image/video and its information (name and description of the image/video) from NASA's APOD API. Then using the property innerHTML, all of the data is displayed on the DOM.

## What I Learned
The way data is stored in the API should be strictly reflected in your code as well. For example, in the NASA API the date was stored in YYYY-MM-DD format, so the user's input shoud also be written in that format or else it won't be as easy to fetch the data.
