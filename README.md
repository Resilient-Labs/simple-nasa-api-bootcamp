# 🚀 Project: NASA API

This website allows you to choose a date and take a look back in time of a picture NASA took on that day. It also gives you a brief summary about the picture.

**Link to project:** kerlinaugustin-simple-nasa-api.netlify.app

![timeloop](https://user-images.githubusercontent.com/102834611/169181794-e3a42021-3091-4739-864c-f16efc684d15.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This website utilizes an API. I first created an input and a button. In javascript I created a function called get picture for the purpose to get an image from the api. I made the input equal to a variable. I then put the variable I created into the date parameter section of the api url. Then I created the fetch function and passed in the api url with the variable in the date parameter. Then I told it to give me a response in JSON, then I took that response and put it into a parameter called data. The data I got back from the JSON had a title, url and explanation key so I set them equal to different html tags to show on the website whenever someone put a date into the input.

## Lessons Learned:

I learned that you don't technically need the .catch function after the fetch function but it is best practice to do so. 
