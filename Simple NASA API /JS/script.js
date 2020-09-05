// let input = prompt("Enter a date ")
// let api_key= "D6DtbJtmo7xHESy16dn3cG757KZQtMnDIULlvH5k"
// let submitTag = document.querySelector('input');
let button = document.querySelector('button');
let input = document.querySelector('input').value;
// mdn
button.addEventListener('click', fetchingapi);
console.log(input);

function fetchingapi(){
  document.querySelector("iframe").src = ''
  document.querySelector("img").src = ''
  input = document.querySelector('input').value;
  let api_key= "D6DtbJtmo7xHESy16dn3cG757KZQtMnDIULlvH5k"
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${input}`)
      .then(response => response.json())
      .then(data => {


        // document.querySelector("img").src = data.url;
        // document.querySelector("p").innerHTML= data.explanation;
        // document.querySelector("iframe").src = data.url;
        document.querySelector("p").innerHTML = data.explanation;
          if (data.media_type == "video") {
            document.querySelector("iframe").src = data.url;
          } else {
            document.querySelector("img").src = data.url;
          }

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("error")
      });
}








// // mdn
// let objectOfApi ={
//   api_key: "D6DtbJtmo7xHESy16dn3cG757KZQtMnDIULlvH5k",
//   input : prompt("Enter a date ")
//
//
//
// }
// objectOfApi.input;
//   fetch(`https://api.nasa.gov/planetary/apod?api_key=${objectOfApi.api_key}&date=${objectOfApi.input}`)
//       .then(response => response.json())
//       .then(data => {
//
//         document.querySelector("img").src = data.url;
//         document.querySelector("p").innerHTML= data.explanation;
//         document.querySelector("iframe").src = data.url;
//
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//           alert("erro")
//       });
