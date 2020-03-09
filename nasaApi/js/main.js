// I worked on this project with my Housemates: 
// Zikre H. Kenneth C., Sam D., Shange G., Miggie, G.
//  -- HOUSE CASS, BABY!!!


let userDate = document.getElementById('date')
let check = document.querySelector('button')
let formCheck = document.querySelector('input')


check.addEventListener('click',()=>{

console.log(userDate.value)
fetch(`https://api.nasa.gov/planetary/apod?api_key=tacqQB2Bx00ubPgP4JHHDsUqGs5iBgmx1YwevpWw&date=${userDate.value}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      // console.log(response.url)
      if(response.media_type === "video"){
        document.querySelector('iframe').src= response.url
      }else{
        document.querySelector('img').src= response.url
      }

      document.querySelector('#content').src= response.url

      let picDescript = document.createElement('p');
      picDescript.innerText = response.explanation;
      document.querySelector('#caption').appendChild(picDescript)

    })
    .catch(err => {
        if (userDate.value)
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

})
