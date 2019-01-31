import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    searchList: []
  }

  updateInput = query => {this.searchBook(query)}
  
  searchBook = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(booksFound => {
        if (booksFound.error) {
          this.setState({searchList: [""]})
          this.setState({query})
        } else {
          this.setState({searchList: booksFound})
          this.setState({query})
        }
      })  
    } else {
      this.setState({searchList: []})
      this.setState({query: ''})
    }
  }

  render() {
    return (
      <div className="search-books">
        <Route exact path='/search' render={() => (
          <div>

            <div className="search-books-bar">
              <Link to='/' className="close-search">Back to List</Link>
              <div className="search-books-input-wrapper">
                
                <input 
                  type="text" 
                  value={this.state.query}
                  onChange={(e) => this.updateInput(e.target.value)}
                  placeholder="Search by title or author"
                />
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.searchList.map(book => (
                      <li key={book.id}>
                        <Book books={book} selectShelf={this.props.selectShelf}/>
                      </li>
                    )
                  )
                }
              </ol>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default Search