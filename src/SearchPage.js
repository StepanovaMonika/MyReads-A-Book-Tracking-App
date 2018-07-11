import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }

  searchBooks(query) {
    if(query.length > 0) {
      BooksAPI.search(query).then((searchedBooks) => {
          this.setState({ searchedBooks: searchedBooks })
      }).catch((e) => {
        console.log(e)
        this.setState({ searchedBooks: [] })
      })
    }
  }

  updateQuery = (query) => {
    if(this.state.query.lenght === 0) {
      this.setState({ searchedBooks: ''})
    } else {
      this.setState({ query: query, searchedBooks: [] })
      this.searchBooks(query)
    }
  }

  render() {

    const { query, searchedBooks} = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {searchedBooks.length>0 ? searchedBooks.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.thumbnail + ")" }}></div>
                      <div className="book-shelf-changer">
                        <select value="none" onChange={(event) => changeShelf(book, event.target.value)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              )) : 'not'}


          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage
