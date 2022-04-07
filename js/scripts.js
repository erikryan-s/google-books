import { getBooks } from "./modules/getBooks.js";

// ! READ-ONLY
const GOOGLEBOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// query selectors
const background = document.querySelector("#bg-image");
const searchBtn = document.querySelector(".searchbar__button");
const searchInput = document.querySelector(".searchbar__input");
const libraryContainer = document.querySelector(".library-grid");
const searchHeader = document.querySelector(".search-result__header");
const footer = document.querySelector(".footer");

const bgImg = () => {
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
    bgImg();
});

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value;
    // if (searchQuery === "") {
    //     openModal()
    // }
    const books = await getBooks(GOOGLEBOOKS_URL, searchQuery);

    const booksList = books.map((book) => {
        const imgLink =
            book.volumeInfo.imageLinks?.thumbnail ??
            "../assets/library/defaultbook.jpg";
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors;
        const previewLink = book.volumeInfo.previewLink;

        return `
            <div class="book-card">
                <div class="book-card__image">
                    <img
                        id="bookImg"
                        src="${imgLink}"
                        alt="${title}"
                    />
                </div>
                <p class="book-card__author">${authors}</p>
                <p class="book-card__title">${title}</p>
                <a
                    class="book-card__link"
                    href="${previewLink}"
                    target="_blank"
                    class="moreInfo"
                    ><div class="book-card__button">
                        Read Book
                    </div>
                </a>
            </div>
        `;
    });

    libraryContainer.innerHTML = booksList.join("");
    searchHeader.innerText = `Your search results for: "${searchQuery}"`;
});
