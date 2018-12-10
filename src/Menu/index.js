import React, {Component} from 'react';
import {tabsData} from './tabsData';
import {Tab} from '../Tab';
import './style.scss';

class Menu extends Component {
  getTabs() {
    return tabsData.map((tabData) => {
      return <Tab data={tabData} key={tabData.id} onClickTab={this.props.onClickTab} isCurrent={this.props.currentCategory === tabData.id}/>
    });
  }

  render() {
    return (
      <ul className='menu'>
        {this.getTabs()}
      </ul>
    );
  }
}

export default Menu;
