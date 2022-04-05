// query selectors
const background = document.querySelector("#bg-image");

const randomImg = () => {
    // array of images
    let images = [
        "bg1.jpg",
        "bg2.jpg",
        "bg3.jpg",
        "bg4.jpg",
        "bg5.jpg",
        "bg6.jpg",
        "bg7.jpg",
        "bg8.jpg",
        "bg9.jpg",
        "bg10.jpg",
    ];
    // amount of images
    let numOfImg = images.length;
    // get random image
    let i = Math.floor(numOfImg * Math.random());
    // apply image as background
    const urlString = `url(./assets/backgrounds/${images[i]})`;
    background.style.backgroundImage = urlString;
};

// on refresh
document.addEventListener("DOMContentLoaded", () => {
    randomImg();
});
