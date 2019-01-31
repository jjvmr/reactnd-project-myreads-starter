import React, { Component } from 'react'

export class Book extends Component {
  render() {
    const books = this.props.books;

    return (
      books 
      ? <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{backgroundImage:
              `url(${books.imageLinks ? books.imageLinks.thumbnail : ''})`}
            }>
            </div>
            <div className="book-shelf-changer">
              <select 
                onChange={(e)=> this.props.selectShelf(books, e.target.value)} 
                value={books.shelf}
              >
                <option value="move" disabled>Move to...</option>
                <option style={{backgroundImage: 'url(./icons/currentlyReading.svg)'}} value="currentlyReading">Currently Reading</option>
                <option style={{backgroundImage: 'url(./icons/wantToRead.svg)'}} value="wantToRead">Want to Read</option>
                <option style={{backgroundImage: 'url(./icons/read.svg)'}} value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{books.title}</div>
          <div className="book-authors">{books.authors ? books.authors.join('; ') : 'None'}</div>
        </div>

      : <div style={{fontSize: 20}}>No matches found. Please use a different term</div>
    )
  }
}

export default Book