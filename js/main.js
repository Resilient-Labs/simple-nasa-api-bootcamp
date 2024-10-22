//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


// some queries paramenters you have to know


// first thing is to see if were pulling actual data , so you need to console.log
// now you need to pull for different dates now that youve checked for original data
//console.log everything to see if youre getting what you expected. Like line 22-24 you shoulf have console.log them first 





document.querySelector('button').addEventListener('click', getPic)   // this line is here becuase this is when the person clicks on the button,always outside the function

function getPic(){         //must create function, before fetching
    const date = document.querySelector('input').value  // you needed to get the input value from the date entered
    const apiurl =`https://api.nasa.gov/planetary/apod?api_key=zxclvkmXrPxXCtYytK9S2hGwlJ6fGVpGhoaiU0Se&date=${date}`  //tho


fetch (apiurl)  // you will always fetch the url 
.then(res => res.json())  //always same
.then(data =>{      //always same
    console.log(data)                                            //this is the first thing you did to see if you had data 
    document.querySelector('h2').innerText = data.title           // always use data.(whatever you need to display). Youre grabbing the title from the api and using .notion to grab the h2 from the data
    document.querySelector('h3').innerText = data.explanation    // Youre grabbing the explanation from the api and using .notion to grab the h3 from the data to get the explanation
             // you did this for the media querey for videos, you added iframe and added a class to that
                  //  Youre grabbing the image from the api and using .notion to grab the src from the data to get the image

                  let url = data.url
                  if(data.media_type === 'image'){
                    document.querySelector('img').src = url
                      document.querySelector('iframe').classList.add('hidden')
                      document.querySelector('.img').classList.remove('hidden')
                      document.querySelector('iframe').src = ''
                  }else if(data.media_type === 'video'){
                      document.querySelector('iframe').classList.remove('hidden')
                      document.querySelector('img').src = ''
                      document.querySelector('iframe').src = data.url
                      document.querySelector('img').classList.add('hidden')
                  }

          
})

.catch(err =>{                      //this always be the same
    console.log(`error ${err}`) // always be the same
})
}


