# MyReads Project

This project is part of Udacity's FEND.

## Project Overview

The objective of this project is to build a React web application that allows users to search for books and assign shelves to them by refactoring the static code.

Users can categorize books into following shelves: Currently Reading, Want to Read, Read. If a book has not been assigned to a shelf, the option None is selected. Users are allowed to move books from one shelf to another and to remove a book from a bookshelf by choosing option None.

## How to run the application

1. Download or clone this repository and unzip the files. 
2. Install all project dependencies with `npm install`
3. Start the server with `npm start`

## Backend Server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Dependencies

* Project is based on [Udacity code](https://github.com/udacity/reactnd-project-myreads-starter)
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* It is necessary to have [Node.js](https://nodejs.org/en/download/) installed to be able to run the application 
