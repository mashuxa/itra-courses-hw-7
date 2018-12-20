import React, {Component} from 'react';

function MenuItem(props) {
    const itemClassList = props.isActive ? 'main__item main__item--active' : 'main__item';
    return <div onClick={props.onClickItem} className={itemClassList}>{props.text}</div>;
}

export {MenuItem};
