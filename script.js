const API_KEY = "WwbjrkIcQbI2yDVJwM7NFaVZbGeHYjAm7I7axHnYpwQnwiiaZXE1vc1S"; 
const resultDiv = document.querySelector(".result");
const loader = document.querySelector(".loader");
let isLoading = false;

async function getRandomPexelsPhotos() {
    loader.style.display = 'block'; 
    const randomPage = Math.floor(Math.random() * 1000) + 1; // simulate randomness
    const url = `https://api.pexels.com/v1/curated?per_page=12&page=${randomPage}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY
            }
        });

        const data = await response.json();
        console.log(data);
        displayPhotos(data.photos);

    } catch (error) {
        console.error("Error fetching from Pexels:", error);
    }finally {
        loader.style.display = 'none'; 
        isLoading = false;
    }
}

function displayPhotos(photos) { 
    const fragment = document.createDocumentFragment();
    photos.forEach(photo => {
        const img = document.createElement("img");

        img.src = photo.src.large;
        img.alt = photo.photographer;
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
