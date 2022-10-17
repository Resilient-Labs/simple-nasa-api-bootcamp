document.querySelector('.nasaButton').addEventListener('click', getPic);

const input = document.querySelector('.nasaInput');

function getPic() {
	console.log(input.value);
	fetch(`https://api.nasa.gov/planetary/apod?api_key=WptJPEwudC9lcbLRMq2W8SfSGFmHJg9zCZmdb8ai&date=${input.value}`, {
		method: 'GET'
	})

	//res-response is a function parameter that holds a response
	//data is a function parameter thats holds a json response
		.then(res => res.json())
		
		.then(data => {

			
			console.log(data);

			document.querySelector('h2').innerText = data.title
			document.querySelector('h3').innerText = data.explanation
			let image = document.querySelector('.nasaImg');
			
			let mediatype = data.media_type
			if (mediatype === 'image') {
				image.src = data.url;
				document.querySelector('iframe').src = data.url //display: none
			} else {
				
				document.querySelector('iframe').src = data.url

			}
		});
}
