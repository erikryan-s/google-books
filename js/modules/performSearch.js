import { getBooks } from "./getBooks.js";

// ! READ-ONLY
const GOOGLEBOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// query selectors
const searchInput = document.querySelector(".searchbar__input");
const libraryGrid = document.querySelector(".library-grid");
const searchHeader = document.querySelector(".search-results__header");

export const performSearch = async () => {
    // store value of search input
    const searchQuery = searchInput.value;

    // when the user doesn't specify a search term
    if (searchQuery === "") {
        alert("Please tell me what you're looking for...");
        return;
    }

    // await API data
    const books = await getBooks(GOOGLEBOOKS_URL, searchQuery);
    // map through API data
    const bookListing = books.map((book) => {
        // thumbnail for book
        const bookThumbnail =
            // * if thumbnail does not exist, (?.) will cause it to return undefined, if undefined (??) will return default thumbnail
            book.volumeInfo.imageLinks?.thumbnail ??
            "./assets/library/defaultbook.jpg";
        // book title
        const title = book.volumeInfo.title;
        // book author/s
        const authors = book.volumeInfo?.authors ?? "Unknown author/s";
        // book description
        const description = book.volumeInfo?.description ?? "Description N/A";
        // link to book on https://books.google.com/
        const linkToBook = book.volumeInfo.previewLink;

        // HTML layout for results
        return `
            <div class="book-card">
                <div class="book-card__image">
                    <img
                        id="bookImg"
                        src="${bookThumbnail}"
                        alt="${title}"
                    />
                </div>
                <div class="book-card__content">
                    <p class="book-card__author">${authors}</p>
                    <p class="book-card__title">${title}</p>
                    <p class="book-card__description">${description}</p>
                    <a
                        class="book-card__link"
                        href="${linkToBook}"
                        target="_blank"
                        ><div class="book-card__read">Read Book</div>
                    </a>
                </div>
            </div>
                 `;
    });

    // add return to library-grid section in HTML
    libraryGrid.innerHTML = bookListing.join("");
    // replace header with search input
    searchHeader.innerText = `Your search results for : "${searchQuery}"`;
};
