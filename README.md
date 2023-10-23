# NASA API Picture Fetcher

This application fetches and displays the NASA picture of the day based on a user-inputted date.

## Features

- **User Input**: Date selection for fetching the NASA picture of the day.
- **Trigger Button**: Initiates the API call upon click.
- **Display Area**: Showcases the picture and its details.

## Steps to Implement

### 1. Setup the HTML

- Add `id` attributes for easy element selection using JavaScript.
  - Example:
    ```html
    <input type="text" id="dateInput" name="" value="" />
    ```

### 2. JavaScript Logic

#### Event Listener

- Attach an event listener to the button to detect clicks.

#### Fetching Data

- On button click, fetch the picture from NASA's API based on the entered date.

### 3. Error Handling

- Validate user input to ensure it's in the `YYYY-MM-DD` format.
- Handle any errors returned by the NASA API.
- Inform the user if there's no picture available for the selected date or if they entered an invalid date.

## API Details

**API Key**: `waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz`

**Base URL**: `https://api.nasa.gov/planetary/apod`

### Parameters

- `date`: The date of the APOD image to retrieve in `YYYY-MM-DD` format.
- `thumbs`: Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.

**Example Fetch URL**: `https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz&date=YOUR_DATE_HERE&thumbs=False`

**Response Fields**: (Taken from console.logging data inside fetch(url)):

- `.hdurl` for image source.
- `.title` for header (h2).
- `.explanation` for description (h3).

## JavaScript Implementation Breakdown

The JavaScript is designed to fetch and display the NASA picture of the day based on a user-inputted date. Here's a step-by-step breakdown:

### 1. Event Listener

```javascript
document.querySelector("button").addEventListener("click", getImgFromNasa);
```

- **Explanation:**
  An event listener is added to the button. When clicked, it triggers the `getImgFromNasa` function.

### 2. The `getImgFromNasa` Function

This function is responsible for the primary logic:

```javascript
function getImgFromNasa() {
    let userInput = document.getElementById("input").value;
```

- **Explanation:**
  The user's input (intended as a date) is fetched from the input field with ID "input".

```javascript
let url =
	"https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz";
```

- **Explanation:**
  The base URL for the NASA API call is set up, inclusive of the provided API key.

```javascript
    let format = userInput.split("-");
    if (
        userInput.length === 0 ||
        format.length !== 3 ||
        format[0].length !== 4 ||
        format[1].length !== 2 ||
        format[2].length !== 2
    ) {
        document.querySelector("h2").innerHTML = "Please enter a valid date in a YYYY-MM-DD format";
        return;
```

- **Explanation:**
  The user input is checked for valid formatting (YYYY-MM-DD). If the format is incorrect, an error message is displayed.

```javascript
    } else {
        url = `https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz&date=${userInput}&thumbs=False`;
    }
```

- **Explanation:**
  If the date format is valid, the URL for the NASA API call is updated to include the date from the user's input.

```javascript
fetch(url).then((response) => response.json());
```

- **Explanation:**
  The updated URL is used to make a `fetch` request to the NASA API. Once the data is fetched, it is converted into JSON format.

```javascript
        .then((data) => {
            document.querySelector("img").src = data.hdurl;
```

- **Explanation:**
  The `hdurl` from the returned data (which contains the image link) is used to update the `src` attribute of the image tag in the HTML, thereby displaying the image.

```javascript
document.querySelector("h2").innerHTML = data.title;
```

- **Explanation:**
  The `title` from the returned data is used to update the content of the `h2` tag in the HTML.

```javascript
document.querySelector("h3").innerHTML =
	"The description for this picture is " + data.explanation;
```

- **Explanation:**
  The `explanation` from the returned data provides a description of the image. This is used to update the content of the `h3` tag in the HTML, giving context to the displayed image.

```javascript
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
```

- **Explanation:**
  If there's any error during the fetch request or data processing, it's caught and logged to the console.

```

```

# Look into date.API
