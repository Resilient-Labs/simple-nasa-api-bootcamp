function fetchPOTD(selectedDate = `https://api.nasa.gov/planetary/apod?api_key=AhD4GZ66cYIIq5Cj2CuXTVW7xwZ7tJSg3zKuGePV`){
    fetch(selectedDate)
        .then(response => response.json())
        .then(data => {
            document.querySelector("h1").innerHTML = data.title;
            document.querySelector("img").alt = data.title;
            document.querySelector("img").src = data.url;
            document.querySelector("p").innerHTML = data.explanation;

            if(data.media_type == "video"){
                let urlSource = data.url.split("/")[4].split("?")[0];
                document.querySelector("img").src = `https://img.youtube.com/vi/${urlSource}/maxresdefault.jpg`;

                let replaceImage = document.createElement("iframe");
                replaceImage.setAttribute("class","nasaPOTD");
                replaceImage.setAttribute("src","#");
                replaceImage.setAttribute("title","#");
                replaceImage.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
                replaceImage.setAttribute("allowfullscreen","");

                document.querySelector("img").classList.add("hover");

                document.querySelector("img").onclick = () => {
                    document.querySelector("img").parentNode.replaceChild(replaceImage, document.querySelector("img"));
                    document.querySelector("iframe").title = data.title;
                    document.querySelector("iframe").src = data.url;
                }
            }

            document.querySelector("button").onclick = () => {
                let selectedDate = "&date=" + document.querySelector("input").value;
                selectedDate = `https://api.nasa.gov/planetary/apod?api_key=AhD4GZ66cYIIq5Cj2CuXTVW7xwZ7tJSg3zKuGePV${selectedDate}`;
                fetchPOTD(selectedDate);
            }
        })
};

fetchPOTD();

//Still need to fix CSS
