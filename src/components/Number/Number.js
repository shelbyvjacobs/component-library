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


// class Number extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             // add state
//         }
//         this.increaseCount = this.increaseCount.bind(this);
//         this.decreaseCount = this.decreaseCount.bind(this);
//         this.clickPlus = this.handleClickPlus.bind(this); 
//         this.clickMinus = this.handleClickMinus.bind(this);
//     }

//     // add event functions here
//     increaseCount = () => {

//     }

//     decreaseCount = () => {

//     }
    
//     clickPlus = () => {

//     }

//     clickMinus = () => {

//     }

//     render(){
//         return (
            // <div>
            //     <button className="plusMinus" onClick={props.onClick}>{props.minus}</button>
            //     <span className={classList}>{props.number}</span>
            //     <button className="plusMinus" onClick={props.onClick}>{props.plus}</button>
            // </div>
//         )
//     }
// }

// export default Number;