import React from 'react';
import "./Form.css"
import { conditionalExpression } from '@babel/types';

const Form= (props) => {
    let classList = ''
    let classList2 = ''
    let types = ['email', 'select', 'text-button', 'checkbox', 'number']
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
    if (props.button == 'medium-button'){
        classList2 += ` mediumTextButton`
    }
    if (props.button == 'large-button'){
        classList2 += ` largeTextButton`
    }
    if (props.color == 'black'){
        classList += ` black`
    }
    if (props.color == 'blue'){
        classList += ` blue`
    }
    if (props.inputType === 'text'){
        return (
            <div>
            <p className={props.paragraph}>Email</p>
            <form onClick={props.onClick}> 
                <input type={props} className={classList} placeholder={props.label}></input>
            </form>
            </div>
        )
    }
    if (props.inputType === 'select'){
        return (
            <select name={props.type} className={classList}>
                <option value={props.type}>Select</option>
            </select>
        )
    }
    if (props.inputType === 'text-button'){
        return (
            <form> 
                <input type={props} className={classList} placeholder={props.label}></input>
                <input type="submit" value={props.value} className={classList2} onClick={props.onClick}></input>
            </form>
        )
    }
    if (props.inputType === 'checkbox'){
        return (
            <label class="checkbox-label">
                <input type={props.type} className={classList}></input>
                <span className="checkbox-custom"></span>
            </label>
        )
    }
    if (props.inputType === 'number'){
        return (
            <div>
                <button className="plusMinus" onClick={props.onClick}>{props.minus}</button>
                <span className={classList}>{props.number}</span>
                <button className="plusMinus" onClick={props.onClick}>{props.plus}</button>
            </div>
        )
    }
}

export default Form;