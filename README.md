# Google Books

// description

🔗 [Live Demo]()

## Screenshot

<p align="center">
    <img src="" height="400">
</p>

## Goal

-   [requirements](#project-requirements)

## Project Requirements

### Google Books UI

1. Create a page that allows users to search for books
2. Page should include the following:
    - Header section introducing the page
    - Form containing a text input and a submit / search button
    - A grid of books

Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

-   This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
-   Styling must use BEM, and each block should have its own SCSS file
-   Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/nology-tech/kiribati-resources/tree/main/js/modules
-   Write as many non-DOM functions as you can
-   Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Lifecycle & Implementation details

### Breakdown of logic

## Design inspiration

### Windows 10 Login Screen

<p align="center">
    <img src="https://thurrott.s3.amazonaws.com/2018/09/windows-10-skip-ahead.jpg" height="400">
</p>

## Future updates and current limitations