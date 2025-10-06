//Activate button, add event listener
const getPicbtn = document.querySelector('button')
getPicbtn.addEventListener('click', getNasaDailyPic)

function getNasaDailyPic() {
    //grab date input
    const userDate = document.querySelector('input').value
    // Insert date into url
    const url = `https://api.nasa.gov/planetary/apod?api_key=u6GNasxyDF98i7Lsfld9MVtlVsXorWBasAUkvwjr&date=${userDate}`

    fetch(url)
        .then(res => res.json()) //parse response into aa json
        .then(data => {
            //set h2 to data.title or default message           
            document.querySelector('h2').innerText = data.title || "Sorry, please choose another date"

            //replace h3 with data.explanation or default message
            document.querySelector('h3').innerText = data.explanation || ""

            // Pull image, test on 13 Septemeber 2025
            if (data.url.includes("image")) {
                document.querySelector('#displayImage').innerHTML =
                    `<img width="560" height="315" 
                        src="${data.url}" 
                        title="${data.title}"
                    </img>`
                //clear other media
                document.querySelector('#youtubePlayer').innerHTML = "";
                document.querySelector('#mp4Player').innerHTML = "";

                //display youtube Video, test on 14 Septemeber 2025
            } else if (data.url.includes('youtube')) {
                document.querySelector('#youtubePlayer').innerHTML =
                    `<iframe width="560" height="315" 
                        src="${data.url}" 
                        title="${data.title}" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>`
                //clear other media
                document.querySelector('#displayImage').innerHTML = "";
                document.querySelector('#mp4Player').innerHTML = "";

                //display mp4 player, Test on 15 Septemeber 2025 
                // Outlyer that will not work
            } else if (data.media_type.includes("other")) {

                document.querySelector('#mp4Player').innerHTML =
                   `<img width="560" height="315" 
                        src="${data.url}" 
                        title="${data.title}"
                    </img>`
                //clear other media
                document.querySelector('#youtubePlayer').innerHTML = "";
                document.querySelector('#displayImage').innerHTML = "";

            } else {
                document.querySelector('#mp4Player').innerHTML = 'Sorry, photo not available';
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}