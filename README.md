# NASA Picture of the Day

Pick any date and see NASA's Astronomy Picture of the Day from that date, along with its title and NASA's explanation of what you're looking at. Some days are videos instead of pictures, and the app handles both. It uses NASA's APOD API.

## How It's Made:

**Tech used:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

The user picks a date, and I add it to the NASA APOD URL along with my API key. NASA sends back the title, the explanation, and a link to the media for that day.

Not every day is a picture. Some days NASA posts a video, so I check `media_type` in the data. If it's an image, I show it in an `<img>` and hide the video player. If it's a video, I load it in an `<iframe>` and hide the image.

## Optimizations

I kept my API key out of GitHub. It lives in a separate `secret.js` file that I import into `main.js`, and that file is listed in `.gitignore` so it never gets pushed.

Something I want to fix: once the image or the video player gets hidden, I never show it again. So if you search a video day and then a picture day, the picture stays hidden. I need to set the display back to visible before each search.

## Lessons Learned:

I learned that I can't assume an API always sends back the same kind of data. I found out some dates were videos when my image didn't show up, and that's when I started checking `media_type`. I also learned how to use `import` and `export` to keep a secret key in its own file.

## Run It Yourself

1. Get a free API key at [api.nasa.gov](https://api.nasa.gov/).
2. Create a file at `assets/js/secret.js` with this line:
   ```js
   export default "YOUR_API_KEY"
   ```
3. Open `index.html` with a local server, like the Live Server extension in VS Code.
