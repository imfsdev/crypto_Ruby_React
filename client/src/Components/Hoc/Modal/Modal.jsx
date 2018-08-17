import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <div onClick={this.props.modalClick}  className="_modal"> 
        <p>hi</p>
      </div>
    );
  }
}

export default Modal;
