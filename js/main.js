class Nasa {
    constructor(date) {
        this._date = date;
        this._key = "Your API KEY goes here";
    }

    // Setter
    set date(value) {
        this._date = value;
    }

    // Getter
    get date() {
        return this._date
    }

    // Get values from DOM
    valueFromDom(id) {
        return document.querySelector(id).value
    }

    // Method uses fetch to make a request to the server
    retriveInfo() {

        fetch(`https://api.nasa.gov/planetary/apod?date=${this._date}&api_key=${this._key}`)
            .then(result => result.json()) // parse response as JSON object
            .then(data => {
                console.log(data)
                document.querySelector("#title").innerHTML = data.title;
                if (data.media_type === "video") {
                    document.querySelector('img').classList.add("hidden")
                    document.querySelector('iframe').classList.remove("hidden")
                    document.querySelector('iframe').src = data.url
                } else if (data.media_type === "image") {
                    document.querySelector('img').classList.remove("hidden")
                    document.querySelector('iframe').classList.add("hidden")
                    document.querySelector('img').src = data.url
                }
                document.querySelector("#explenation").innerHTML = data.explanation;
            })
            .catch(err => {
                console.log(`error ${err}`)
            })
    }
}


document.querySelector("#button").addEventListener('click', () => {

    // Create a new instance of Nasa
    const nasa = new Nasa()

    // get the vaue from the date
    let userDate = nasa.valueFromDom("#input")

    // Call the setter and set the date
    nasa.date = userDate

    // make the fetch request 
    nasa.retriveInfo()

})