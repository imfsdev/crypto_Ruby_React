import React, { Component } from 'react';

// uses _modal as class because bulma has a default modal class
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
