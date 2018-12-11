import React, {Component} from 'react';
import './style.scss';

class Menu extends Component {
  render() {
    return (
      <ul className='menu'>
        <li className='menu__btn menu__btn--prev'>Prev</li>
        <li className='menu__btn menu__btn--next'>Next</li>
      </ul>
    );
  }
}

export default Menu;
