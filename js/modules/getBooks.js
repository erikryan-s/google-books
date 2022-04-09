// function to get API information
export const getBooks = async (url, searchTerm) => {
    // fetch data (will return a promise)
    const response = await fetch(`${url}+${searchTerm}`);
    // awaits until promise is resolved and then promise is jsoned
    const data = await response.json();
    // returns items array that you can map through
    return data.items;
};
