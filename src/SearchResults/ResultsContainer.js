import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

export default class ResultsContainer extends Component {
  // loop through search results
  // insert ResultsItem(s) into Container
  render() {
    return (
      <section id='results-container'>
        {/* map through this.props.books => gen section with
        image/title/author/price/description/link */}
        {this.props.books.map(book => {
          return (
            <ResultsItem
              id={book.id}
              key={book.id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              price={book.price}
              link={book.link}
              image={book.image}
            />
          );
        })}
      </section>
    );
  }
}
