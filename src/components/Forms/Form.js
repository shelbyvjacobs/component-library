import React from 'react';
import "./Form.css"
import { conditionalExpression } from '@babel/types';

const Form= (props) => {
    let classList = ''
    let types = ['email', 'select', 'text-button']
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
    if (props.smallSelect){
        classList += ` smallSelect`
    }
    if (props.mediumSelect){
        classList += ` mediumSelect`
    }
    if (props.largeSelect){
        classList += ` largeSelect`
    }
    if (props.inputType == 'text'){
        return (
            <form onClick={props.onClick}> 
                <input type={props} className={classList} placeholder={props.label}></input>
            </form>
        )
    }
    if (props.inputType == 'select'){
        return (
            <select name={props.type} className={classList}>
                <option value={props.type}>Select</option>
            </select>
        )
    }
    if (props.inputType == 'text-button'){
        return (
                <form onClick={props.onClick}> 
                    <input type={props} className={classList} placeholder={props.label}></input>
                    <input type="submit" value="Redeem"></input>
                </form>
        )
    }
}

export default Form;