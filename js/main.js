// let userAnswer = prompt("What cocktail would you like? ")
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userAnswer}`)
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//       let imgUrl = []
//       response.drinks.forEach((el)=>{
//         imgUrl.push(el.strDrinkThumb)
//       })
//       let count = 0
//       setInterval(()=>{
//         if( count >= imgUrl.length ){
//           count = 0
//         }
//         document.querySelector('img').src = response.drinks[count].strDrinkThumb
//         count++
//       },1000)
//       console.log(imgUrl);
//       //document.querySelector('img').src = response.drinks[0].strDrinkThumb
//       //document.querySelector('p').textContent = response.drinks[0].strInstructions
//       //console.log(response);
//       // console.log(response.drinks[0].strDrinkThumb);
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });

// loop from 1995 to 2020 (year)
// loop from 01 to 12 (month)
// loop from 01 to 31 (day)
// IF February AND Year % 4 == 0, make day stop at 29
// ELSE IF February, day stop at 28
// ELSE ELSE IF sept/april/june/nov, day stop at 30
// ELSE normal

// function calendarSelect(){
//   let yearOption = document.querySelector('.year')
//   let monthOption = document.querySelector('.month')
//   let dayOption = document.querySelector('.day')
//
//   for (let i = 1995; i <= 2020; i++ ){
//     let yearOptionAdd = document.createElement('option')
//
//     yearOptionAdd.value = `${i}`
//     yearOptionAdd.innerText = `${i}`
//     yearOption.appendChild(yearOptionAdd)
//   }
//   for (let j = 1; j <= 12; j++){
//     let monthOptionAdd = document.createElement('option')
//
//     monthOptionAdd.value = `${j}`
//     monthOptionAdd.innerText = `${j}`
//     monthOption.appendChild(monthOptionAdd)
//   }
// // 9 4 6 11
//   if (monthOption.selectedIndex == 4 || monthOption.selectedIndex == 6 || monthOption.selectedIndex == 9 || monthOption.selectedIndex == 11){
//     console.log('Sin Devil Trigger')
//
//   }
  // for (let k = 1; k <= 12; k++){
  //   let dayOptionAdd = document.createElement('option')
  //
  //   dayOptionAdd.value = `${k}`
  //   dayOptionAdd.innerText = `${k}`
  //   dayOption.appendChild(dayOptionAdd)
  //   console.log(dayOption.lastChild)
  // }

// }
// calendarSelect()
//
//



// API KEY Ig9CTIr8zkDvdzdaQVo9ZhtAlEfz4oWGkKta2zKc
// Nasa API https://api.nasa.gov/planetary/apod?api_key=Ig9CTIr8zkDvdzdaQVo9ZhtAlEfz4oWGkKta2zKc
// Account and Email Account Email: bobburger@yahoo.com
// Account ID: a93cd1dd-72f2-4bdd-86df-d97aab42f181

document.querySelector("button").addEventListener("click", (e)=>{
  // console.log('selected element', document.querySelector(".year"));
  const yyyy = document.querySelector(".year").value;
  const mm = document.querySelector(".month").value;
  const dd = document.querySelector(".day").value;

  fetch(`https://api.nasa.gov/planetary/apod?date=${yyyy}-${mm}-${dd}&api_key=Ig9CTIr8zkDvdzdaQVo9ZhtAlEfz4oWGkKta2zKc`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      if(parseInt(response.code) === 400){
        console.log(response.msg);
        document.querySelector("h1").textContent = response.msg;
      }else{
         if(response.media_type === "video"){
          document.querySelector("iframe").src = response.url;
          document.querySelector("iframe").style.display = "block";
          document.querySelector("img").style.display = "none";
        }else if(response.media_type === "image"){
          document.querySelector("img").src = response.hdurl
          document.querySelector("img").style.display = "block";
          document.querySelector("iframe").style.display = "none";
        }
        document.querySelector("h1").innerHTML = response.title;
        document.querySelector("p").innerHTML = response.explanation;
      }
      // document.querySelector("img").src = response.hdurl
      // document.querySelector("h1").innerHTML = response.title;
      // document.querySelector("p").innerHTML = response.explanation;
      console.log(response);
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

  })
