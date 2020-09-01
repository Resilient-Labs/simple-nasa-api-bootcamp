// Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6

let nasa = {
    searchBtn: document.querySelector('button'),
    srcAbout: document.querySelector('about'),
    fetchImg: () => {
        const input = document.getElementById('date-input').value;
        fetch(`https://api.nasa.gov/planetary/apod?api_key=Jnbw77bmMCtVMnkggF2NsnUgMa25I207L1D3MhT6&date=${input}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            if (data.media_type == 'image'){
                document.getElementById('img-result').src = data.url;
            }else if (data.media_type == 'video'){
                document.querySelector('iFrame').src = data.url;
            }      
        })
    
    
        .catch(err => {
            console.log(`error ${err}`);
        alert("Sorry, no available results for this search");
        })
    }
}

