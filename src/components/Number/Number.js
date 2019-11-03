import React from 'react';
import "./Number.css"
import { conditionalExpression } from '@babel/types';

const Number= (props) => {
    let classList = ''
    let types = ['number']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    } 

    // functionality

    return (
        <div>
            <button className="plusMinus" onClick={props.onClick}>{props.minus}</button>
            <span className={classList}>{props.number}</span>
            <button className="plusMinus" onClick={props.onClick}>{props.plus}</button>
        </div>
    )
}

export default Number;