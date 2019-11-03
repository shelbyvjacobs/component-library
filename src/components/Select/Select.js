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

// class Select extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             // add state
//         }
//         this.handleSelection = this.handleSelection.bind(this);
//     }

//     // add event functions here
//     handleSelection = () => {

//     }

//     render(){
//         return (
//             <div>
//                 <label className={classList} onClick={props.onClick}>
//                     <input type={props.type} className={classList}></input>
//                     <span className={props.border}></span>
//                 </label>
//                 <p className={props.labelClass}>{props.label}</p>
//             </div>
//         )
//     }
// }

// export default Select;