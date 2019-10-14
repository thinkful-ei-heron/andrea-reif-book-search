import React, { Component } from 'react';
// import ResultsContainer from './SearchResults/ResultsContainer';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      loading: false,
      error: null,
      filter: {
        printType: 'all',
        bookType: 'ebooks',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const searchValue = document.getElementById('search').value;
    console.log(searchValue);
    this.setState({
      loading: true,
      filter: {
        printType: document.getElementById('print-type-select').value,
        bookType: document.getElementById('book-type-select').value,
      },
    });
    this.fetchBooks(searchValue, this.state.filter);
    // ResultsContainer(this.state.books);
  };
  fetchBooks = searchValue => {
    let printType = this.state.filter.printType;
    let bookType = this.state.filter.bookType;
    let newBooks = [];
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&printType=${printType}${
        bookType !== 'No Filter' ? `&filter=${bookType}` : ''
      }`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject('Aaargh');
        }
      })
      .then(books => {
        if (books.items) {
          newBooks = books.items.map(book => {
            return {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              price: book.saleInfo.ListPrice
                ? (this.listPrice = book.saleInfo.listPrice.amount)
                : (this.listPrice = null),
              link: book.canonicalVolumeLink,
            };
          });
        } else {
          alert('aaaarrgh');
        }
        this.setState({
          books: newBooks,
        });
      })
      .then(() =>
        console.log('this.state.books[0].title: ' + this.state.books[0].title)
      )
      .catch(e => console.log(e));
  };
  render() {
    return (
      <form id='book-search' onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search for a book'
        />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

// https://www.googleapis.com/books/v1/volumes?q={search terms}
// https://www.googleapis.com/books/v1/volumes?q=henry
// filter = book type
// printType = printType
// https://www.googleapis.com/books/v1/volumes?q=henry&filter=full&printType=magazines
