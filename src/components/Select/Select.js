import React from 'react';
import "./Select.css"
import { conditionalExpression } from '@babel/types';

const Select= (props) => {
    let classList = ''
    let types = ['select']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    } 
    if (props.smallSelect){
        classList += ` smallSelect`
    }
    if (props.mediumSelect){
        classList += ` mediumSelect`
    }
    if (props.largeSelect){
        classList += ` largeSelect`
    }
    if (props.color == 'selectGrey'){
        classList += ` selectGrey`
    }

    // functionality

    return (
        <select name={props.type} className={classList} onChange={props.onChange}>
            <option value={props.type}>Select</option>
            <option value={props.type}>Option 1</option>
            <option value={props.type}>Option 2</option>
            <option value={props.type}>Option 3</option>
        </select>
        )
}

export default Select;