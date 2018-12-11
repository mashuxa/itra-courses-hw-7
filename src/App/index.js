import React, {Component} from 'react';
import Menu from '../Menu';
import {MenuItem} from '../MenuItem';
import data from '../data/cars.js';
import './style.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isActivePrevBtn: false,
      isActiveNextBtn: true,
      selectedItems: [],
      step: 'brand'
    }
  }
  componentDidMount() {
  }

  getCurrentItems() {
    return data.cars.map((elData) => {
      return <MenuItem key={elData.brand} text={elData.brand}/>;
    });

  }

  render() {
    const items = this.getCurrentItems();
    return (
      <React.Fragment>
        <Menu/>
        <main className='main'>
          {/*<div className="main__item">Item</div>*/}
          {items}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
