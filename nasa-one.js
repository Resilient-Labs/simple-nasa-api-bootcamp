let apiKey = "1SNm39yafaGNxWU8RKgqA5H3EVGAr8MfBLXA98tk";
fetch(`https://api.nasa.gov/planetary/apod?date=2010-01-02&api_key=${apiKey}`)
  .then(response => response.json())
  .then(response =>{
    console.table(response);
  })
  .catch(err => {
    console.log(`error ${err}`);
    alert('sorry, there are no results for your search');
  });
