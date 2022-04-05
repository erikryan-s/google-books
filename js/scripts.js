const background = document.querySelector("#bg-image");

const randomImg = () => {
    let images = [
        "../assets/backgrounds/bg1.jpg",
        "../assets/backgrounds/bg2.jpg",
        "../assets/backgrounds/bg3.jpg",
        "../assets/backgrounds/bg4.jpg",
    ];
    let numOfImg = images.length;
    let i = Math.floor(numOfImg * Math.random());
    const url = `${images[i]}`;
    console.log(url);
    background.style["background-image"].url = url;
};

document.addEventListener("DOMContentLoaded", () => {
    randomImg();
});
