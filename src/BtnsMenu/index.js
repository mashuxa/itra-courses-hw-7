import React, {Component} from 'react';
import './style.scss';

class BtnsMenu extends Component {
  render() {
    const prevBtnClassList = this.props.isActivePrevBtn ? 'btns-menu__btn btns-menu__btn--prev btns-menu__btn--visible' : 'btns-menu__btn btns-menu__btn--prev';
    const nextBtnClassList = this.props.isActiveNextBtn ? 'btns-menu__btn btns-menu__btn--next btns-menu__btn--visible' : 'btns-menu__btn btns-menu__btn--next';

    return (
      <ul className='btns-menu'>
        <li className={prevBtnClassList}>Prev</li>
        <li className={nextBtnClassList} onClick={this.props.onClickNextBtn}>Next</li>
      </ul>
    );
  }
}

export {BtnsMenu};
