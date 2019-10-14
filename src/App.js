import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';
import ResultsContainer from './SearchResults/ResultsContainer';

function App() {
  return (
    <section className='App'>
      <Header />
      <SearchBar />
      <Filters />
      <ResultsContainer />
    </section>
  );
}

export default App;
