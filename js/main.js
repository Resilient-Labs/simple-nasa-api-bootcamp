//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// Set the maximum date value for the input field to the current date
// Using `new Date().toISOString()` to get the current date in the "YYYY-MM-DDTHH:MM:SS.sssZ" format.
// We then split at 'T' to just get the date portion.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
document.getElementById("input").max = new Date().toISOString().split("T")[0];

document.querySelector("button").addEventListener("click", getImgFromNasa);

function getImgFromNasa() {
	let userInput = document.getElementById("input").value;
	let url =
		"https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz";

	if (!userInput) {
		document.querySelector("h2").innerHTML = "Please select a valid date.";
		return;
	} else {
		url = `https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz&date=${userInput}&thumbs=False`;
	}

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			if (data.title === undefined && data.explanation === undefined) {
				document.querySelector("h2").innerHTML =
					"No data entry is available for this date please try another date :)";
				document.querySelector("h3").innerHTML =
					"No description available for this date.";
				return;
			}

			document.querySelector("h2").innerHTML = data.title;
			document.querySelector("h3").innerHTML =
				"The description for this picture is " + data.explanation;

			if (data.media_type === "image") {
				if (data.hdurl === undefined) {
					document.querySelector("h2").innerHTML =
						"No image available for this date.";
					return;
				}
				document.querySelector("img").src = data.hdurl;
				document.querySelector("img").style.display = "block"; // show the image
				document.querySelector("#videoFrame").style.display = "none"; // hide the video
			} else if (data.media_type === "video") {
				if (data.url === undefined) {
					document.querySelector("h2").innerHTML =
						"No video available for this date.";
					return;
				}
				document.querySelector("#videoFrame").src = data.url;
				document.querySelector("#videoFrame").style.display = "block"; // show the video
				document.querySelector("img").style.display = "none"; // hide the image
			}
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			document.querySelector("h2").innerHTML =
				"An error occurred. Please try again.";
		});
}
