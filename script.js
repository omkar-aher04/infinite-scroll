const API_KEY = "WwbjrkIcQbI2yDVJwM7NFaVZbGeHYjAm7I7axHnYpwQnwiiaZXE1vc1S"; // Replace with your real API key
const resultDiv = document.querySelector(".result");

async function getRandomPexelsPhotos() {
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

getRandomPexelsPhotos();
