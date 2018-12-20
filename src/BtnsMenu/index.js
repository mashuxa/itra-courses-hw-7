import React, {Component} from 'react';
import './style.scss';


function BtnsMenu(props) {
    const prevBtnClassList = props.isActivePrevBtn ? 'btns-menu__btn btns-menu__btn--prev' +
        ' btns-menu__btn--visible btns-menu__btn--enabled' : 'btns-menu__btn btns-menu__btn--prev  btns-menu__btn--enabled';
    let nextBtnClassList = props.isActiveNextBtn ? 'btns-menu__btn btns-menu__btn--next btns-menu__btn--visible' : 'btns-menu__btn btns-menu__btn--next';

    if (props.isEnableNextBtn) {
        nextBtnClassList = `${nextBtnClassList} btns-menu__btn--enabled`;
    }
    return (
        <ul className="btns-menu">
            <li className={prevBtnClassList} onClick={props.onClickPrevBtn}>Prev</li>
            <li className={nextBtnClassList} onClick={props.onClickNextBtn}>Next</li>
        </ul>
    );
}

export {BtnsMenu};
