# MyReads Project

This application allows you to place selected books into a designated shelf. Users can also search the Udacity database for books to add to their initial book shelfs. There are two pages. The Homepage displays the three bookshelfs, currently reading, want to read, and read. The search page will allow the user to search for books.

## Installation

Access the projects folder and run `npm install` from the command line to install the dependencies. Once installed run the command `npm start` to load application on local host 3000.

## How to use

### Choosing which shelf to send a book to
Once loaded you may choose which shelf to send a book to by clicking on the green circle with a down arrow of any book.

### Search for a book to add to shelf
To access the search page select the plus icon located at the bottom right of the page. Type in the search field for possible books to be found. No results will be displayed if the input field is blank or the query you've typed does not exist.

The process of adding a book to a shelf is identical to the process described in the previous section. Once the option is selected the book will be displayed on the selected shelf on the main page of the application.

To return to the main page you may use the back arrow in the input area at the top or the browsers back arrow.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
