import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import './App.css'

class BooksApp extends Component {
  // Books in bookshelves
  state = {
    books: []
  }

  // Get all books saved in bookshelves and save them into state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Changing shelves
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf
      this.setState(state => ({
        // Filter books with different id and add a new book to the shelf
        books: state.books.filter(oneBook => oneBook.id !== book.id).concat([ book ])
      }));
    })
  }

  render() {

    return (
      <div className="app">
        {/* Render SearchPage component on the search page and pass component state to it */}
        <Route path='/search' render={() => (
          <SearchPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        {/* Render HomePage component on the home page and pass component state to it */}
        <Route exact path='/' render={() => (
          <HomePage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
