import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <section>
        <form action='' id='filters-form'>
          <label htmlFor=''>Print Type:</label>
          <select id='print-type-select'>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
          <label htmlFor=''>Book Type:</label>
          <select id='filter-select'>
            <option value='ebooks'>No Filter</option>
            <option value='free-ebooks'>Free</option>
            <option value='full'>Full</option>
            <option value='paid-ebooks'>Paid</option>
            <option value='partial'>Partial</option>
          </select>
        </form>
      </section>
    );
  }
}
