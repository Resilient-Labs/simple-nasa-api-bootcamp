# 🚀 Project: Simple NASA API

### Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API

# NASA API

This project is a simple web application that fetches NASA's image of the day based on a user's inputted date. The images represent fascinating celestial events, space missions, and much more from NASA's archives.

![NASA API Photocatcher] (<img/simple nasa api.png>)

Link to project: 

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, and Fetch API for requesting data.

Using JavaScript, the application dynamically fetches data from NASA's API based on the user's input date. The HTML structure was kept minimalistic, ensuring only essential elements were present for user input and data display. CSS was used to style the application, giving it a clean and intuitive UI. The main focus was on the JavaScript aspect, where the Fetch API was employed to make asynchronous calls to NASA's database.

## Optimizations
While the initial implementation fetched the image of the day every time a user entered a date, I later introduced a caching mechanism. By storing recently fetched data in the browser's local storage, the application now reduces the number of unnecessary API calls, speeding up the user experience and conserving bandwidth.

## Lessons Learned:
One of the significant moments was when I successfully integrated the Fetch API and managed to pull data  based on user input. It emphasized the power of operations in modern web applications. This project was a great stepping stone in understanding how to interact with third-party APIs and optimizing the user experience.


