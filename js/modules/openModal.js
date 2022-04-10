// query selectors for modal
const modalSection = document.querySelector(".modal-section");

// * modal
export const showModal = async () => {
    const modalListing = books.map((books) => {
        const bookThumbnail =
            // * if thumbnail does not exist, (?.) will cause it to return undefined, if undefined (??) will return default thumbnail
            books.volumeInfo.imageLinks?.thumbnail ??
            "../assets/library/defaultbook.jpg";
        // book title
        const title = books.volumeInfo.title;
        // book author/s
        const authors = books.volumeInfo?.authors ?? "Unknown author";
        // book description
        const bookDescription =
            books.volumeInfo?.description ?? "No description";
        // date book was published
        const bookPublishedDate =
            books.volumeInfo.publishedDate ?? "Unknown publish date";
        // book language
        const bookLanguage = books.volumeInfo.language;
        // book page count
        const bookPageCount = books.volumeInfo.pageCount;

        return `
            <dialog class="modal">
            <div class="modal-content">
                <div class="modal-content__image">
                    <img
                        id="bookImg"
                        src="${bookThumbnail}"
                        alt="${title}"
                    />
                </div>

                <div class="modal-content__info">
                    <p id="authors">${authors}</p>
                    <p id="title">${title}</p>
                    <p id="description">
                        <strong>Description:</strong>
                        ${bookDescription}
                    </p>
                    <p id="publish">
                        <strong>Publish Date: </strong>${bookPublishedDate}
                    </p>
                    <p id="language">
                        <strong>Language: </strong>${bookLanguage}
                    </p>
                    <p id="page-count">
                        <strong>Page count: </strong>${bookPageCount}
                    </p>
                </div>

                <div class="close-modal">Close</div>
            </div>
            </dialog>
             `;
    });

    // add return to library-grid section in HTML
    modalSection.innerHTML = modalListing.join("");

    // close modal on click of button
    closeModal.addEventListener("click", () => {
        modal.close();
    });
};
