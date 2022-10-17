//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// https://api.nasa.gov/planetary/apod?api_key=4LTnPN3AoSaoG9cqd2mRfIDWX06ByIEjSSWlR0JB

// // document.query for input value

// turn input into calendar

// const theDate = document.querySelector('input').value

document.querySelector('button').addEventListener('click', findNasaPicture)

function findNasaPicture() {
  const theDate = document.querySelector("input").value;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=4LTnPN3AoSaoG9cqd2mRfIDWX06ByIEjSSWlR0JB&date=${theDate}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch(err => {
      console.log(`err ${err}`);
    });
}
