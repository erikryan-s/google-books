import { performSearch } from "./modules/performSearch.js";
import { bgImg } from "./modules/bgImg.js";
import { showModal } from "./modules/showModal.js";

// query selectors
const searchBtn = document.querySelector(".searchbar__button");
const enterKey = document.querySelector("#searchbar-button");
const moreInfoBtns = document.querySelectorAll(".book-card__info");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

// * background randomizer
// on page refresh
document.addEventListener("DOMContentLoaded", () => {
    bgImg();
});

// * search for books
// by clicking on search button
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    performSearch();
});

// or by pressing the 'return' key
enterKey.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        performSearch();
    }
});

// * modal
// moreInfoBtns.forEach((button) => {
//     button.addEventListener("click", () => {
//         modal.showModal();
//     });
// });
