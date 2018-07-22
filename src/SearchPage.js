import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {

  state = {
    query: '',
    searchResults: []
  }

  // Check query,set state and call searchBooks
  updateQuery(query) {
    if (this.state.query.length >= 0) {
      this.setState({ query: query, searchResults: [] })
      this.searchBooks(query)
    } else {
      this.setState({ searchResults: [] })
    }
  }

  // Search books 
  searchBooks(query) {
    if (query.length > 0) {
      // Search for query and return results
      BooksAPI.search(query).then((searchResults) => {
        // Save search results to a variable
        let shelvedSearchResults = searchResults
        // Check every book from search results 
        shelvedSearchResults.map((oneSearchedBook) => {
          // Check every shelved book
          this.props.books.map((shelvedBook) => {
            // Compare books ids and if equal set correct shelf to the searched book
            oneSearchedBook.id === shelvedBook.id ? oneSearchedBook.shelf = shelvedBook.shelf : null 
          })
        }) 
          // Set state for search results
          this.setState({ searchResults: shelvedSearchResults })
      // Check for errors and set state to an empty array
      }).catch((error) => {
        console.log(error)
        this.setState({ searchResults: [] })
      }) 
    // else set state to an empty array
    } else {
      this.setState({ searchResults: [] })
    } 
  }

  render() {

    const { query, searchResults} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Link to HomePage */}
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
              {/* Check if searchResults is not empty and render list of books */}
              {searchResults.length > 0 ? searchResults.map((book) => (
                <li key={book.id}>
                  {/* Passing component props to child component */}
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                </li>
              )) : ''}


          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage
