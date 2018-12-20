import React, {Component} from 'react';
import {BtnsMenu} from '../BtnsMenu';
import {MenuItem} from '../MenuItem';
import {carsData} from '../data/cars.js';
import './style.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: null,
            currentValue: null,
        };
        this.currentValues = {
            brand: null,
            model: null,
            transmission: null,
            fuel: null,
        };
        this.onClickNextBtn = this.onClickNextBtn.bind(this);
        this.onClickPrevBtn = this.onClickPrevBtn.bind(this);
    }

    onClickItem(currentStep, currentValue) {
        this.setState({
            currentStep: currentStep,
            currentValue: currentValue,
        });
    }

    onClickNextBtn() {
        if (this.state.currentStep !== null && this.state.currentValue !== null) {
            this.currentValues[this.state.currentStep] = this.state.currentValue;
            this.setState({
                currentStep: null,
                currentValue: null,
            });
        }
    }

    onClickPrevBtn() {
        let prevStep;
        for (let step in this.currentValues) {
            if (this.currentValues[step] !== null) {
                prevStep = step;
            }
        }
        this.currentValues[prevStep] = null;
        this.setState({
            currentStep: null,
            currentValue: null,
        });
    }

    getCurrentItems() {
        for (let currentStep in this.currentValues) {
            if (this.currentValues[currentStep] === null) {
                if (currentStep === 'model') {
                    return carsData[this.currentValues.brand].map((value, index) => {
                        return <MenuItem key={index} text={value}
                                         onClickItem={this.onClickItem.bind(this, currentStep, value)}
                                         isActive={this.state.currentValue === value}/>;
                    });
                } else {
                    return carsData[currentStep].map((value, index) => {
                        return <MenuItem key={index} text={value}
                                         onClickItem={this.onClickItem.bind(this, currentStep, value)}
                                         isActive={this.state.currentValue === value}/>;
                    });
                }
            }
        }

        return Object.values(this.currentValues).map((value, index) => {
            return <MenuItem key={index} text={value}/>;
        });
    }

    render() {
        return (
            <React.Fragment>
                <BtnsMenu isActivePrevBtn={this.currentValues.brand !== null}
                          isActiveNextBtn={this.currentValues.fuel === null}
                          isEnableNextBtn={this.state.currentValue !== null}
                          onClickNextBtn={this.onClickNextBtn}
                          onClickPrevBtn={this.onClickPrevBtn}/>
                <main className="main">
                    {this.getCurrentItems()}
                </main>
            </React.Fragment>
        );
    }
}

export default App;
