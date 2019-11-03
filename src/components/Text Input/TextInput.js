import React from 'react';
import "./TextInput.css"
import { conditionalExpression } from '@babel/types';

const TextInput= (props) => {
    let classList = ''
    let types = ['email']
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

    // functionality

    return (
        <div>
        <p className={props.paragraph}>Email</p>
        <form onChange={props.onChange}> 
            <input type={props} className={classList} placeholder={props.label}></input>
        </form>
        </div>
    )
}

export default TextInput;