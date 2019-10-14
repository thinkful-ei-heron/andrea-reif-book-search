import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';
import ResultsContainer from './SearchResults/ResultsContainer';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  handleNewBooks = newBooks => {
    // do stuff
    this.setState({
      books: newBooks,
    });
    // console.log(this.state.books);
  };
  componentDidMount() {
    console.log('Design inspiration: http://motherfuckingwebsite.com/');
  }

  render() {
    return (
      <section className='App'>
        <Header />
        <SearchBar ParentCallback={this.handleNewBooks} />
        <Filters />
        <ResultsContainer books={this.state.books} />
      </section>
    );
  }
}
