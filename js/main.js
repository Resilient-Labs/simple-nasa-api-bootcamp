class PhotoFinder {
    constructor() {
        const apiKey = "m6pfPcPcRuPmGGRVaTsIFZhRz6cVC9pDVLNrQzrC"; 
        this.baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        this.dateElement = document.querySelector("#date-picker");
        this.titleElement = document.querySelector("#title");
        this.photoElement = document.querySelector("#photo");
        this.videoElement = document.querySelector("#video");
        this.descriptionElement = document.querySelector("#description");
        this.fullDescription = "";

        this.button = document.querySelector("button");
        this.button.addEventListener("click", this.getPhoto.bind(this));
    }

    getPhoto() {
        let url = this.baseUrl;
        if (this.dateElement.value) {
            url += `&date=${this.dateElement.value}`
        }

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.media_type === "image") {
                this.titleElement.innerText = data.title;                
                this.photoElement.src = data.hdurl;
                this.videoElement.src = "";                
                this.descriptionElement.innerText = data.explanation;    
                
                this.photoElement.classList.remove("hidden");                
                this.videoElement.classList.add("hidden");
            }
            else if (data.media_type === "video") {
                this.titleElement.innerText = data.title;
                this.photoElement.src = "";
                this.videoElement.src = data.url;                
                this.descriptionElement.innerText = data.explanation;    

                this.photoElement.classList.add("hidden");                
                this.videoElement.classList.remove("hidden");
            }
            else {
                this.titleElement.innerText = "No image available for that date!";
                this.photoElement.src = "img/saturn-svgrepo-com.svg";
                this.videoElement.src = "";
                this.descriptionElement.innerText = "Some dates have other types of media associated with them which we can't currently display. Try a different date to keep exploring!"
            
                this.photoElement.classList.remove("hidden");                
                this.videoElement.classList.add("hidden");
            }
        })
        .catch(error => {
            console.error(error);
        })
    }
}

const photoFinder = new PhotoFinder();