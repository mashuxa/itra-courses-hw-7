import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="main__item">{this.props.text}</div>
    );
  }
}

export {MenuItem};
