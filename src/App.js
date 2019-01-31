import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import Main from './Main'; 
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  selectShelf = (book, shelf) => {

    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        
        <Main 
          books={this.state.books} 
          selectShelf={this.selectShelf} 
        />


      </div>
    )
  }
}

export default BooksApp
