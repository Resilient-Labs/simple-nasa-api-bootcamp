# Project: Simple NASA (Complex API 2)

### Goal: Enable a user to enter a date and return the picture/video of the day from NASA's API.

### Preview:

![alt tag](simplenasa.png)

### lessons learned:
```
In this Project I learned, that I could create conditional statements that will manipulate the DOM by changing the source of my img DOM element and assigned it the response.url and change its style to display block and my iframe style to display none. i.e:
if(response.media_type==="image"){
document.querySelector("img").src = response.url
document.querySelector("img").style = "display: block"
document.querySelector("iframe").style = "display: none"
}
else if (response.media_type==="video"){
document.querySelector("iframe").src = response.url;
document.querySelector("iframe").style = "display: block"
document.querySelector("img").style = "display: none"
vid=
console.log(response)
}
 What this bit of code functionality allowed me to do was to display the image from my API response and hide my iframe and vise versa.       

```
