// Array mit Pfaden zu den Bildern
const imagePool = [
    "../img/Kris.jpg",
    "../img/Tim.jpg",
    "../img/IMG_9996.jpg",
    "../img/IMG_9997.jpg",
    "../img/IMG_9998.jpg",
    "../img/PHOTO-2024-11-20-16-26-56.jpg",
    "../img/PHOTO-2024-11-20-16-26-57.jpg",
    "../img/PHOTO-2024-11-20-16-28-17.jpg"
];

// Intervallzeit in Millisekunden
const intervalTime = 4000;

// Bildcontainer und das aktuelle Bild
const imageElement = document.getElementById("random-image");

// Funktion, um ein zufälliges Bild auszuwählen
function getRandomImage() {
    return imagePool[Math.floor(Math.random() * imagePool.length)];
}

// Funktion, um das Bild zu wechseln
function changeImage() {
    const newImage = getRandomImage();

    // Verhindere wiederholtes Anzeigen desselben Bildes
    if (imageElement.src.includes(newImage)) {
        return changeImage();
    }

    // Sanfter Übergang
    imageElement.classList.remove("active");
    setTimeout(() => {
        imageElement.src = newImage;
        imageElement.classList.add("active");
    }, 500); // Zeit, um die alte Animation zu beenden
}

// Initialisiere mit einem zufälligen Bild
imageElement.src = getRandomImage();
imageElement.classList.add("active");

// Starte den Bildwechsel im Intervall
setInterval(changeImage, intervalTime);
