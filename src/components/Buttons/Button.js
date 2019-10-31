import React from 'react';
import "./Button.css"
import { conditionalExpression } from '@babel/types';

// This is a functional component - just sent up a little differently as an arrow function!
const Button= (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default', 
    "primary-invert", "danger-invert", "success-invert", "warning-invert", "default-invert", 
    "primary-light", "danger-light", "success-light", "warning-light", "default-light"]
    // conditional styling!
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    } 
    if (props.large) {
        classList += ` button-large`
    }
    return <button className={classList} onClick={props.onClick}> 
        {props.label} 
    </button>
}

export default Button;