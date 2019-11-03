import React from 'react';
import "./Checkbox.css"
import { conditionalExpression } from '@babel/types';

const Checkbox= (props) => {
    let classList = ''
    let types = ['checkbox']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    } 
    if (props.color == 'black'){
        classList += ` checkbox-container black`
    }
    if (props.color == 'blue'){
        classList += ` checkbox-container blue`
    }

    // functionality

    return (
        <div>
            <label className={classList} onClick={props.onClick}>
                <input type={props.type} className={classList}></input>
                <span className={props.border}></span>
             </label>
            <p className={props.labelClass}>{props.label}</p>
        </div>
    )
}

export default Checkbox;

// class Checkbox extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             // add state
//         }
//         this.toggleCheck = this.toggleCheck.bind(this);
//     }

//     add event functions here
//     toggleCheck = () => {

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

// export default Checkbox;