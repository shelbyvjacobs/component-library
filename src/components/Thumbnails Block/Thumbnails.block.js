import React from 'react';
import "./Thumbnails.block.css";
import { conditionalExpression } from '@babel/types';

const Block= (props) => {
    let classList = ''
    let types = ['columnWhite']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` block-${props.type}`
    }
    return <div><h1>Hey there</h1></div>
}

export default Block;