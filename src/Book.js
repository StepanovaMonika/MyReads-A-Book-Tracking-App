import React, { Component } from 'react'


class Book extends Component {

	render() {

		return (
			<div className="book">
        <div className="book-top">
        	{/* Check if a book has an image thumbnail */}
	        {this.props.book.imageLinks ?
            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")" }}></div>) 
            :
            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "" }}></div>)
          }
          <div className="book-shelf-changer">
          	{/* Show correct shelf, if the book does not have any shelf, set it to none*/}
            <select value={this.props.book.shelf || "none"}
            	onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
      	{/* Check for authors and add a whitespace between them */}
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.map((author) => (author + " ")) : ""}</div>
      </div>
		)	
	}	
}

export default Book
