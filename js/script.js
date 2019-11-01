const apiKey = "QHbpZ6s8vPwczqTarVhbCoI9RhtdsevCdda68Zmj";
const submitButton = document.querySelector("#submitButton");

const videoElement = document.querySelector("video");
const imageElement = document.querySelector("img");

function currentDate() { return new Date(Date.now()); }
const between = (num, low, high) => { return (num >= low && num <= high)?(true):(false); }
function craftDate(dateInput) {
    let dateData = dateInput.split('-');
    for(let i = 0; i < 3; i++) {
        dateData[i] = parseInt(dateData[i], 10);
    }
    return new Date(dateData[0], dateData[1]-1, dateData[2]);
}

submitButton.addEventListener("click", () => {

    const dateInput = document.querySelector("#dateInput").value;

    if(validateDate(dateInput)) {

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`)
            .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
            .then(response => {
                console.table(response);
                if(response.media_type === "image") {
                    document.querySelector("#videoSource").src = "";
                    videoElement.style.display = "none";
                    imageElement.style.display = "block";
                    imageElement.src = response.url;
                } else {
                    imageElement.style.display = "none";
                    videoElement.style.display = "block";
                    document.querySelector("#videoSource").src = response.url;
                    imageElement.src = "";
                }
                document.querySelector("#explanation").textContent = response.explanation;
            })
            .catch(err => {
                console.log(`error ${err}`)
                alert("sorry, there are no results for your search")
            });

    } else {
        alert(`The date entered must be between Fri June 16 1995 & ${currentDate().toDateString()}`);
    }
});



function validateDate(dateInput) {
    console.log(craftDate(dateInput));
    console.log((new Date(1995, 5, 16)).getTime());
    console.log((currentDate()).getTime());
    return between(craftDate(dateInput), new Date(1995, 5, 16), currentDate());
}