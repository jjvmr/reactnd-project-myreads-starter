import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Book from './Book'
import Search from './Search'


class Main extends Component {
  render() {

    return (
      <div>
        <Search selectShelf={this.props.selectShelf} books={this.props.books}/>

        <Route exact path='/' render={() => (
          <div>

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
                        {
                          this.props.books.filter(book => book.shelf === 'currentlyReading').map(book => (
                            <li key={book.id}>
                              <Book books={book} selectShelf={this.props.selectShelf} thisShelf='currentlyReading'/>
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                          this.props.books.filter(book => book.shelf === 'wantToRead').map(book => (
                            <li key={book.id}>
                              <Book books={book} selectShelf={this.props.selectShelf} thisShelf='wantToRead'/>
                            </li>
                          ))
                        } 
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                          this.props.books.filter(book => book.shelf === 'read').map(book => (
                            <li key={book.id}>
                              <Book books={book} selectShelf={this.props.selectShelf} thisShelf='read'/>
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>

                  <ol className="books-none">
                    {
                      this.props.books.filter(book => book.shelf === 'none').map(book => (
                        <li key={book.id}>
                          <Book books={book} selectShelf={this.props.selectShelf}/>
                        </li>
                      ))
                    }
                  </ol>
                  
                </div>
              </div>

              <div className="open-search">
                <Link to='/search' className='add-book'>Add a Book</Link>
              </div>

            </div>
          
          </div>
        )} />

      </div>
    )
  }
}

export default Main


