class NasaPOTD{
    constructor(title, url, media, explain){
        this.title = title;
        this.imgURL = url;
        this.videoURL = "";
        this.media = media;
        this.explain = explain;
        this.request = `https://api.nasa.gov/planetary/apod?api_key=AhD4GZ66cYIIq5Cj2CuXTVW7xwZ7tJSg3zKuGePV`;

        //The following will figure what kind of media the POTD is. If it's a youtube video it will pull the photo from the youtube link
        if(this.media == "video"){
            let urlSource = this.imgURL.split("/")[4].split("?")[0];
            this.videoURL = url;
            this.imgURL = `https://img.youtube.com/vi/${urlSource}/maxresdefault.jpg`;
        }
        if(this.media == "image"){
            this.imgURL = url;
        }
    }

    //If the POTD is a video, the following allows you to click the image and replace it with the video. The image is also pulled from the youtube link.
    clickImgReplace(){
        let replaceImage = document.createElement("iframe");
        replaceImage.setAttribute("class","nasaPOTD");
        replaceImage.setAttribute("src","#");
        replaceImage.setAttribute("title","#");
        replaceImage.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        replaceImage.setAttribute("allowfullscreen","");

        document.querySelector("img").onclick = () => {
            document.querySelector("img").parentNode.replaceChild(replaceImage, document.querySelector("img"));
            document.querySelector("iframe").title = this.title;
            document.querySelector("iframe").src = this.videoURL;
        }
    }

    //This will display the image
    displayBody(){
        console.log(`Class logs:
            Title: ${this.title}
            Image URL: ${this.imgURL}
            Video URL: ${this.videoURL}
            Media: ${this.media}
            Explain: ${!this.explain ? "Empty":"Has Text"}`);

        document.querySelector("h1").innerHTML = this.title;
        document.querySelector("img").alt = this.title;
        document.querySelector("img").src = this.imgURL;
        document.querySelector("p").innerHTML = this.explain;
    }

    // //Will grab the newest request
    // fetchNewPOTD(){
    //     fetch(this.request)
    //         .then(response => response.json())
    //         .then(newData => {
    //             console.log(`New Fetch logs:
    //                 Title: ${newData.title}
    //                 URL: ${newData.url}
    //                 Media: ${newData.media_type}
    //                 Explain: ${!newData.explanation ? "Empty":"Has Text"}`)
    //
    //             newData.title,
    //             newData.url,
    //             newData.media_type,
    //             newData.explanation
    //
    //             if(newData.media == "video"){
    //                 newData.clickImgReplace();
    //                 document.querySelector("img").classList.add("hover");
    //             }
    //
    //             this.displayBody();
    //             this.updatePic();
    //         })
    // }

    //WIP, it's suppose to allow you to pick a date a pull the new info
    updatePic(){
        document.querySelector("button").onclick = () => {
            let selectedDate = "date=" + document.querySelector("input").value;
            selectedDate = this.request + selectedDate;
            console.log("clicked");
            this.newPic(selectedDate);
        }
    }

    //WIP, pull new image and refresh the body
    newPic(url){
        fetch(url)
            .then(response => response.json())
            .then(newData => {

                this.title = newData.title;
                this.imgURL = newData.url

                if(this.media == "video"){
                    this.clickImgReplace();
                    document.querySelector("img").classList.add("hover");
                }

                this.displayBody();
            })
    }

    this.updatePic();
}

//Inital request
fetch(`https://api.nasa.gov/planetary/apod?api_key=AhD4GZ66cYIIq5Cj2CuXTVW7xwZ7tJSg3zKuGePV`)
    .then(response => response.json())
    .then(data => {
        console.log(`Fetch logs:
            Title: ${data.title}
            URL: ${data.url}
            Media: ${data.media_type}
            Explain: ${!data.explanation ? "Empty":"Has Text"}`)

        let instance = new NasaPOTD(data.title, data.url, data.media_type, data.explanation)

        if(instance.media == "video"){
            instance.clickImgReplace();
            document.querySelector("img").classList.add("hover");
        }

        instance.displayBody();
        instance.updatePic();
    })
