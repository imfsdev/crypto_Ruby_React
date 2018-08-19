import React, { Component } from 'react';

export default class CardItem extends Component {
  render() {
    return (
      <div className="column">
        <div className="home-cards-item">
          <h5 className="home-cards-item-subtitle">{this.props.subtitle}</h5>
          <h4 className="home-cards-item-title">{this.props.title}</h4>
          <p className="home-cards-item-body">{this.props.body}</p>
        </div>
      </div>
    );
  }
}
