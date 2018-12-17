import React, {Component} from 'react';
import Menu from '../Menu';
import {MenuItem} from '../MenuItem';
import data from '../data/cars.js';
import './style.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      brand: null,
      model: null,
      transmission: null,
      fuel: null
    }
  }

  onClickItem(type, value) {
    this.type = type;
    this.value = value;
  }

  onClickNextBtn() {

    if (this.type && this.value) {
      this.setState({
        [this.type]: this.value
      });
    }
  }

  onClickPrevBtn() {
    this.setState({
      [this.type]: null
    });

  }

  getCurrentItems() {
    if (this.state.brand === null) {
      return data.cars.map((elData, i) => {
        return <MenuItem key={elData.brand} text={elData.brand}
                         onClickItem={this.onClickItem.bind(this, 'brand', elData.brand)}
                         isActive={this.value === elData.brand}/>;
      });
    } else if (this.state.model === null) {

      const brandIndex = data.cars.findIndex((el) => {
        return el.brand === this.state.brand;
      });

      return data.cars[brandIndex].models.map((model, i) => {
        return <MenuItem key={model} text={model} onClickItem={this.onClickItem.bind(this, 'model', model)}
                         isActive={this.value === model}/>;
      });
    } else if (this.state.transmission === null) {
      return data.transmission.map((type, i) => {
        return <MenuItem key={type} text={type} onClickItem={this.onClickItem.bind(this, 'transmission', type)}
                         isActive={this.value === type}/>;
      });
    } else if (this.state.fuel === null) {
      return data.fuel.map((type, i) => {
        return <MenuItem key={type} text={type} onClickItem={this.onClickItem.bind(this, 'fuel', type)}
                         isActive={this.value === type}/>;
      });
    } else {
      return Object.values(this.state).map((val) => {
        return <MenuItem key={val} text={val}/>;
      });


    }

  }

  render() {
    console.log(this.type);
    console.log(this.state);
    return (
      <React.Fragment>
        <Menu isActivePrevBtn={this.state.brand !== null} isActiveNextBtn={this.state.fuel === null}
              onClickNextBtn={this.onClickNextBtn.bind(this)} onClickPrevBtn={this.onClickPrevBtn.bind(this)}/>
        <main className='main'>
          {this.getCurrentItems()}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
