import React from 'react';
import "./TextInputWithButton.css"
import { conditionalExpression } from '@babel/types';

const TextInputWithButton= (props) => {
    let classList = ''
    let classList2 = ''
    let types = ['text-button']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    } 
    if (props.mediumForm) {
        classList += ` mediumForm`
    }
    if (props.largeForm) {
        classList += ` largeForm`
    }
    if (props.button == 'medium-button'){
        classList2 += ` mediumTextButton`
    }
    if (props.button == 'large-button'){
        classList2 += ` largeTextButton`
    }

    // functionality

    return (
        <form> 
            <input type={props} className={classList} placeholder={props.label}></input>
            <input type="submit" value={props.value} className={classList2} onClick={props.onClick}></input>
        </form>
    )
}

export default TextInputWithButton;