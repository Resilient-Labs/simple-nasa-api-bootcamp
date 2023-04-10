//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch,)

function getFetch(){
    let chooseDate = document.querySelector('input').value
    console.log(chooseDate)
    const url = `https://api.nasa.gov/planetary/apod?api_key=nhoJidhkDPGvtfR9hFdMv3URdCmgXfeIBFkm0DOb&date=${chooseDate}`



fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector('img').src = data.hdurl // Outputs the image URL
    document.querySelector('h3').innerText = data.explanation // Outputs the explanation for the url img
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
