import { getBooks } from "./modules/getBooks.js";
import { bgImg } from "./modules/bgImg.js";

// ! READ-ONLY
const GOOGLEBOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// query selectors
const searchBtn = document.querySelector(".searchbar__button");
const searchInput = document.querySelector(".searchbar__input");
const libraryContainer = document.querySelector(".library-grid");
const searchHeader = document.querySelector(".search-results__header");

// run background randomizer on refresh
document.addEventListener("DOMContentLoaded", () => {
    bgImg();
});

// listen for click on search button
searchBtn.addEventListener("click", async (e) => {
    // prevent page refresh
    e.preventDefault();

    // store value of search input
    const searchQuery = searchInput.value;
    // await API data
    const books = await getBooks(GOOGLEBOOKS_URL, searchQuery);
    // map through API
    const booksList = books.map((book) => {
        // thumbnail for book
        const imgLink =
            // * if thumbnail does not exist, (?.) will cause it to return undefined, if undefined (??) will return default thumbnail
            book.volumeInfo.imageLinks?.thumbnail ??
            "../assets/library/defaultbook.jpg";
        // book title
        const title = book.volumeInfo.title;
        // book author/s
        const authors = book.volumeInfo.authors;
        // link to book on https://books.google.com/
        const linkToBook = book.volumeInfo.linkToBook;

        // HTML layout for results
        return `
            <div class="book-card">
                <div class="book-card__image">
                    <img id="bookImg" src="${imgLink}" alt="${title}" />
                </div>
                <p class="book-card__author">${authors}</p>
                <p class="book-card__title">${title}</p>
                <a
                    class="book-card__link"
                    href="${linkToBook}"
                    target="_blank"
                    class="moreInfo"
                    ><div class="book-card__button">Read Book</div>
                </a>
            </div>
        `;
    });

    // add return to library-grid section in HTML
    libraryContainer.innerHTML = booksList.join("");
    // replace header with search input
    searchHeader.innerText = `Your search results for: "${searchQuery}"`;
});
