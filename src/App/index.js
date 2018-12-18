import React, {Component} from 'react';
import {BtnsMenu} from '../BtnsMenu';
import {MenuItem} from '../MenuItem';
import {carsData} from '../data/cars.js';
import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: null,
      model: null,
      transmission: null,
      fuel: null,
    };
  }


  onClickItem(step) {

    this.onClickNextBtn.bind("1", "2");
    //   // this.type = type;
    //   // this.value = value;
  }

  onClickNextBtn(x, y) {
    console.log('Sgh;ghg');
  }

  //   if (this.type && this.value) {
  //     this.setState({
  //       [this.type]: this.value
  //     });
  //   }
  // }

  // onClickPrevBtn() {
  //   this.setState({
  //     [this.type]: null
  //   });
  //
  // }

  getCurrentItems() {
    for (let currentValue in this.state) {
      if (this.state[currentValue] === null) {
        return carsData[currentValue].map((el, index) => {
          return <MenuItem key={index} text={el} onClickItem={this.onClickItem.bind(this, el, index)}/>;
        });
      } else {
        console.log(this.state);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <BtnsMenu isActivePrevBtn={this.state.brand !== null} isActiveNextBtn={this.state.fuel === null}
                  onClickNextBtn={this.onClickNextBtn}/>
        <main className='main'>
          {this.getCurrentItems()}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
