# Google Books

A responsive user interface where you can search for books using the Google Books API. Implemented using knowledge gained about async / await functions as well as the ability to fetch APIs.

🔗 [Live Demo](https://erikryan-s.github.io/google-books/)

## Table of Contents

-   [Requirements](#project-requirements)
-   [Lifecycle and Implementation details](#lifecycle-and-implementation-details)
-   [Design inspirations](#design-inspirations)
-   [Future updates and current limitations](#future-updates-and-current-limitations)

## Screenshots

<p align="center">
    <img src="https://i.gyazo.com/1ec8a7fa5f6ea28f7599b7d3a1e3d762.jpg" height="400" width=auto>
    <img src="https://i.gyazo.com/902b9a66bb5610f97f17743f0a1f7bee.jpg" height="400" width=auto>
    <img src="https://i.gyazo.com/e86236b216860b217870bfe6caa0b96a.jpg" height="400" width=auto>
</p>

## Goal

1. Create a page that allows users to search for books based on [requirements](#project-requirements)
2. Separate DOM functions and non-DOM functions into different modules.
3. Functions should do one thing and be as pure as possible.
4. Parametize and abstract large pieces of code.

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

Bonus (**optional, but highly recommended**):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Lifecycle and Implementation details

### Tech Used

-   HTML
-   CSS
-   Sass
-   JavaScript
-   Google Books API
-   Fetch
-   Async/await

### Breakdown of logic

// write here

## Design inspirations

### Windows 10 Login Screen & Momentum browser extension

<p align="center">
    <img src="https://thurrott.s3.amazonaws.com/2018/09/windows-10-skip-ahead.jpg" height="400" width=auto>
    <img src="https://champinternet.com/wp-content/uploads/12-3-2014-blog.jpg" height="auto" width="711">
</p>

## Future updates and current limitations

// write here
