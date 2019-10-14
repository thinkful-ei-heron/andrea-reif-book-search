import React, { Component } from 'react';

export default class ResultsItem extends Component {
  render() {
    return (
      <ul key={this.props.id} className='listItem'>
        <li>
          <h3>Title: {this.props.title}</h3>
        </li>
        <li>Author(s):{this.props.authors}</li>
        <li>Description: {this.props.description}</li>
        <li>
          Price: {this.props.price ? this.props.price : 'Price not found.'}
        </li>
        <li>Link: {this.props.link}</li>
        <li>
          <img src={this.props.image} alt='no'></img>
        </li>
      </ul>
    );
  }
}
