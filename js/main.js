//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//HTTP Request
//GET https://science.nasa.gov/wp-json/wp/v2/apod-basic
//
//concept_tags, hd, and thumbs are now disabled in this service.

//Example query
//https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=DEMO_KEY

const input = document.getElementById('date-input');
const btn = document.getElementById('nasa-btn');
const dateListEl = document.getElementById('date-list');
const titleEl = document.getElementById('apod-title');
const imgEl = document.getElementById('apod-img');
const videoLinkEl = document.getElementById('apod-video-link');
const descriptionEl = document.getElementById('apod-description');

// DEMO_KEY is nasa's public test key, fine for this assignment (same idea as thecocktaildb's "1")
// this endpoint doesn't take a date param - it just always hands back the last 25 days as an array,
// which is fine for building the clickable "available dates" list below
const API_URL = 'https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=DEMO_KEY';

// this is the real APOD endpoint - it takes ?date= directly, so it's what actually answers
// "give me the picture for the date the user typed"
const APOD_API_URL = 'https://api.nasa.gov/planetary/apod';

// show the user which dates actually exist as soon as the page loads, so they aren't guessing
renderDateList();

btn.addEventListener('click', getPictureOfTheDay);

// fetch the same array once, and list out every date the api gives us as a clickable item
function renderDateList() {
	fetch(API_URL)
		.then(res => res.json())
		.then(data => {
			// log the raw array so you can see the shape of what the api actually sends back
			console.log('all available apod entries:', data);

			dateListEl.innerHTML = '';

			data.forEach(entry => {
				const li = document.createElement('li');
				li.textContent = entry.date;
				// clicking a date just fills the input - the "Get Picture" button is still
				// what actually fetches and shows the picture, same as if the user typed the date themselves
				li.addEventListener('click', () => {
					input.value = entry.date;
				});
				dateListEl.appendChild(li);
			});
		})
		.catch(err => {
			console.log(`error: ${err}`);
		});
}

function getPictureOfTheDay() {
	const date = input.value.trim();
	if (!date) return;

	// build the request around the date the user typed, so NASA sends back that specific day
	const url = `${APOD_API_URL}?api_key=DEMO_KEY&date=${date}`;
	console.log('requesting:', url);

	fetch(url)
		.then(res => {
			console.log('response status:', res.status);
			console.log('rate limit:', {
				limit: res.headers.get('X-RateLimit-Limit'),
				remaining: res.headers.get('X-RateLimit-Remaining')
			});
			// a non-2xx status means the request itself failed (rate limit, server error, etc) -
			// bail out here instead of trying to read a body that isn't a picture
			if (!res.ok) {
				throw new Error(`NASA API responded with status ${res.status}`);
			}
			return res.json();
		})
		.then(data => {
			console.log('picture found for', date, ':', data);

			// a bad/out-of-range date comes back as {code, msg} instead of a picture object
			if (data && data.title && !data.code) {
				showPicture(data);
			} else {
				console.error('NASA API returned an error:', data.msg || data);
				showError(data.msg || 'No picture found for that date.');
			}
		})
		.catch(err => {
			console.error('request failed:', err);
			showError('Something went wrong fetching that date - check the console for details.');
		});
}

function showPicture(picture) {
	// dot notation pulls each piece we need straight off the picture object
	console.log(`showing "${picture.title}" from ${picture.date}`);

	titleEl.textContent = picture.title;

	if (picture.media_type === 'video') {
		// no playable video file comes back for these - hdurl is just a thumbnail,
		// so point the user at the real thing with a link instead
		imgEl.src = '';
		imgEl.alt = '';
		videoLinkEl.innerHTML = `<a href="${picture.url}" target="_blank" rel="noopener">Watch Video</a>`;
	} else {
		// hdurl is the actual image file - "url" on this endpoint is just a link to the article page
		imgEl.src = picture.hdurl;
		imgEl.alt = picture.title;
		videoLinkEl.innerHTML = '';
	}

	descriptionEl.textContent = picture.explanation;
}

function showError(message) {
	titleEl.textContent = 'No picture found';
	imgEl.src = '';
	imgEl.alt = '';
	videoLinkEl.innerHTML = '';
	descriptionEl.textContent = message;
}
