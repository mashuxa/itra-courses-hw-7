import React, {Component} from 'react';
import './style.scss';

class Menu extends Component {
  render() {
    const prevBtnClassList = this.props.isActivePrevBtn ? 'menu__btn menu__btn--prev menu__btn--visible' : 'menu__btn menu__btn--prev';
    const nextBtnClassList = this.props.isActiveNextBtn ? 'menu__btn menu__btn--next menu__btn--visible' : 'menu__btn menu__btn--next';

    return (
      <ul className='menu'>
        <li className={prevBtnClassList} onClick={this.props.onClickPrevBtn}>Prev</li>
        <li className={nextBtnClassList} onClick={this.props.onClickNextBtn}>Next</li>
      </ul>
    );
  }
}

export default Menu;
