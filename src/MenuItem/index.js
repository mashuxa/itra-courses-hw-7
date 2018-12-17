import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    console.log(this.props);
    const itemClassList = this.props.isActive ? 'main__item main__item--active' : 'main__item';
    return (
      <div onClick={this.props.onClickItem} className={itemClassList}>{this.props.text}</div>
    );
  }
}

export {MenuItem};
