// declare our settings
const apiKey = "your-api-key";
const endpointURL = "https://pixabay.com/api/?key=";
// const parameters = "&q=cute+dog";

// declare our elements
const result = document.getElementById("result");
const searchInput = document.getElementById("search-terms");
const goBtn = document.getElementById("go");

// showing images
let showImages = (images) => {
    result.innerHTML = "";
    // this function renders the image on the page
    let renderImage = (item, index) => {
        // here's a function which checks if the user image exists
        // if it doesn't then we'll return a generic profile image
        let checkIfImageExists = () => {
            console.log(item.userImageURL);
            if (item.userImageURL == "") {
                return "https://icon-library.com/images/white-profile-icon/white-profile-icon-24.jpg";
            } else {
                return item.userImageURL;
            }
        }
        // console.log(item.largeImageURL);
        result.innerHTML += `
        <div class="image">
        <img class="big-img" src="${item.largeImageURL}" alt="pixa image">
        <p>
        <img class="avatar" src="${checkIfImageExists()}">
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

// $.ajax({
//     type: "GET",
//     url: endpointURL + apiKey + parameters,
//     success: (data) => {
//         console.log(data.hits);
//         showImages(data.hits);
//     },
//     error: (error) => {
//         console.log("there's a problem");
//         console.log(error);
//     }
// });

goBtn.onclick = () => {
    searchString = searchInput.value;
    color = document.getElementById("color").value;
    $.ajax({
        type: "GET",
        url: endpointURL + apiKey + "&q=" + searchString + "&colors=" + color,
        success: (data) => {
            console.log(data.hits);
            showImages(data.hits);
        },
        error: (error) => {
            console.log("there's a problem");
            console.log(error);
        }
    });
}

// Activity:

// - Create a dropdown which lets us sort via popularity/latest

// - Create a dropdown which lets us choose the image_type

// e.g."all", "photo", "illustration", "vector"

// Color filter e.g. greyscale
