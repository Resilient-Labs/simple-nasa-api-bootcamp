const apiKey = 'CPtfFgAfoecOX7N0RvIaKPfnBcfHlg74WFRbZYzS'; 

const fetchNasaPicture = () => {
    const date = document.getElementById('inputDate').value;
    if (!date) return alert('Please entesdr a date!');

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url) 
        .then(response => response.json())
        .then(data => {
            if (data.code === 400) {
                document.getElementById('content').innerHTML = '<p>No image and/or information for this date.</p>';
                return;
            }

            document.getElementById('nasaImage').src = data.url;
            document.getElementById('title').textContent = data.title;
            document.getElementById('explanation').textContent = data.explanation;

            document.getElementById('pictureContainer').style.display = 'block';
        })
        .catch(() => {
            document.getElementById('content').innerHTML = '<p>Error fetching data.</p>';
        });
};

document.getElementById('fetchButton').addEventListener('click', fetchNasaPicture);