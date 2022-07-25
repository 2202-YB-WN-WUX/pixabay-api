const apiKey = "your-api-key";
const endpointURL = "https://pixabay.com/api/?key=";
const result = document.getElementById("result");

let showImages = (images) => {

    // this function renders the image on the page
    let renderImage = (item, index) => {
        // console.log(item.largeImageURL);
        result.innerHTML += `
        <div class="image">
        <img class="big-img" src="${item.largeImageURL}" alt="pixa image">
        <p>
        <img class="avatar" src="${item.userImageURL}">
        <span class="username">${item.user}</span>
        <br> 
        <i class="bi bi-heart-fill"></i> ${item.likes}</p>
        </div>
        `;
    }
    // this function loops through our images
    // and runs renderImage for each one
    images.forEach(renderImage);
}

$.ajax({
    type: "GET",
    url: endpointURL + apiKey,
    success: (data) => {
        console.log(data.hits);
        showImages(data.hits);
    },
    error: (error) => {
        console.log("there's a problem");
        console.log(error);
    }
});

// Activity:
// Show the hits (photos) using a forEach

// Activity:
// Show the user name who uploaded it.
// Show the amount of likes with a heart icon next to it.