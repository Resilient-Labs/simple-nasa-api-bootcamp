//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const getDate = document.querySelector('.myDate');

document.querySelector('.myButton').addEventListener('click', giveNASA);

function giveNASA() {
    document.querySelector('.myImage').src = '';
    document.querySelector('.myVideo').src = '';
    document.querySelector('.myTitle').innerText = '';
    document.querySelector('.myExplanation').innerText = '';

    let dateImage = getDate.value;
    console.log(dateImage);

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateImage}`)

        .then(function (response) {

            console.log(response);

            return response.json();
        })

        .then(function (data) {

            console.log(data);

            if (data.media_type === 'image') {
                showImage(data.url);
            }
            else if (data.media_type === 'video') {
                showVideo(data.url);
            }

            showTitle(data.title);

            showExplanation(data.explanation);
        })
};

function showImage(imageNASA) {
    document.querySelector('.myImage').src = imageNASA;
};

function showVideo(videoNASA) {
    document.querySelector('.myVideo').src = videoNASA;
};

function showTitle(titleNASA) {
    document.querySelector('.myTitle').innerText = titleNASA;
};

function showExplanation(explanationNASA) {
    document.querySelector('.myExplanation').innerText = explanationNASA;
};