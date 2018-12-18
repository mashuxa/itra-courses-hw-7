import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    // const itemClassList = this.props.isActive ? 'main__item main__item--active' : 'main__item';
    return (
      <div onClick={this.props.onClickItem} className={'main__item'}>{this.props.text}</div>
    );
  }
}

export {MenuItem};
