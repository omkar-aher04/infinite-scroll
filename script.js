const API_KEY = "Ga5EU9MZpJNuoBuIhHMvy1o7R0sO4JLjwg9H8Ismg8A"; 
const resultDiv = document.querySelector(".result");
const loader = document.querySelector(".loader");
let isLoading = false;
let images = [];
let count = 15;

async function getRandomPexelsPhotos() {
    loader.style.display = 'block'; 
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;
    try {
        const response = await fetch(apiUrl);
        images = await response.json();
        console.log(images);
        displayPhotos(images);

    } catch (error) {
        console.log("Error fetching from API:", error);
    }finally {
        loader.style.display = 'none'; 
        isLoading = false;
    }
}

function displayPhotos(photos) { 
    const fragment = document.createDocumentFragment();
    photos.forEach(photo => {
        const img = document.createElement("img");

        img.src = photo.urls.regular;
        img.style.width = "300px";
        img.style.margin = "10px";
        fragment.appendChild(img);
    });
    resultDiv.appendChild(fragment);
}
window.addEventListener("scroll",() =>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight && !isLoading){
        isLoading = true;
        getRandomPexelsPhotos();
    }
});
getRandomPexelsPhotos();
