import React from 'react';
import classes from './Button.module.css';

//.join(' ') converts the array of strings to strings
// also note we can pass strings as styles
//note we are  setting btnType somewhere else i.e in OrderSummary
const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;