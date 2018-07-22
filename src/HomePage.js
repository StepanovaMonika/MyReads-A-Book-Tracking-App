import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class HomePage extends Component {

	render() {

		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                	{/* Filter shelved books and return those with the currentlyReading shelf */}
                  {this.props.books.filter(book => {return book.shelf === "currentlyReading"}).map((book) => (
                    <li key={book.id}>
                    	{/* Passing component props to child component */}
                      <Book
		                    book={book}
		                    changeShelf={this.props.changeShelf}
		                  />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                	{/* Filter shelved books and return those with the wantToRead shelf */}
                  {this.props.books.filter(book => {return book.shelf === "wantToRead"}).map((book) => (
                    <li key={book.id}>
                    	{/* Passing component props to child component */} 
                      <Book
		                    book={book}
		                    changeShelf={this.props.changeShelf}
		                  />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                	{/* Filter shelved books and return those with the read shelf */}
                  {this.props.books.filter(book => {return book.shelf === "read"}).map((book) => (
                    <li key={book.id}>
                    	{/* Passing component props to child component */}
											<Book
		                    book={book}
		                    changeShelf={this.props.changeShelf}
		                  />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
        	{/* Link to the SearchPage */}
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
		)
	}	
}

export default HomePage

