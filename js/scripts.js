const background = document.querySelector("#bg-image");

const randomImg = () => {
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
    let numOfImg = images.length;
    let i = Math.floor(numOfImg * Math.random());
    const urlString = `url(./assets/backgrounds/${images[i]})`;
    background.style.backgroundImage = urlString;
};

document.addEventListener("DOMContentLoaded", () => {
    randomImg();
});
