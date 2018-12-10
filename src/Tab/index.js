import React, {Component} from 'react';

class Tab extends Component {
  constructor() {
    super();
  }

  render() {
    let classList = 'menu__item';
    if(this.props.isCurrent){
      classList = 'menu__item menu__item--current';
    }
    const tabData = this.props.data;
    return (
      <li className={classList} onClick={()=>{this.props.onClickTab(tabData.id)}}> {tabData.text} </li>
    );
  }
}

export {Tab};
