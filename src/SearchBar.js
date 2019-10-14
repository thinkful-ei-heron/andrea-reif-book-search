import React, { Component } from 'react';
// import ResultsContainer from './SearchResults/ResultsContainer';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      filter: {
        printType: 'all',
        filter: 'ebooks',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const searchValue = document.getElementById('search').value;
    console.log(searchValue);
    this.setState({
      filter: {
        printType: document.getElementById('print-type-select').value,
        filter: document.getElementById('filter-select').value,
      },
    });
    this.fetchBooks(searchValue, this.state.filter);
    // ResultsContainer(this.state.books);
  };
  fetchBooks = searchValue => {
    let printType = this.state.filter.printType;
    let filter = this.state.filter.filter;
    let newBooks = [];
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&printType=${printType}${
        filter !== 'No Filter' ? `&filter=${filter}` : ''
      }`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject(this.setState({ error: 'Aaargh' }));
        }
      })
      .then(books => {
        if (books.items) {
          newBooks = books.items.map(book => {
            return {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              price: book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : null,
              link: book.volumeInfo.canonicalVolumeLink,
              image: book.volumeInfo.imageLinks.thumbnail, // idk why eslint/prettier likes trailing commas!
              id: book.id,
            };
          });
        } else {
          this.setState({ error: 'Aaargh' });
          alert(this.state.error);
        }
        this.props.ParentCallback(newBooks);
      })
      .catch(this.setState({ error: 'Aaargh' }));
  };

  render() {
    return (
      <form id='book-search' onSubmit={this.handleSubmit}>
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
