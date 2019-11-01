import React from 'react';
import "./Thumbnails.block.css";
import { conditionalExpression } from '@babel/types';

const Block= (props) => {
    let classList = ''
    let types = ['column', 'doubleColumn', 'smallThumbnail']
    // conditional styling
    if (types.includes(props.type)) {
        classList += ` block-${props.type}`
    }
    if (props.white) {
        classList += ` white`
    }
    if (props.grey) {
        classList += ` grey`
    }
    if (props.type == "column"){
        return(
            <div className={props.container}>
                <div><img src={props.macbook}></img></div>
                <div><h2>{props.name}</h2></div>
                <div><img src={props.rating}></img></div>
                <div><h3>{props.price}</h3></div>
            </div>
        )
    }
    if (props.type == "doubleColumn"){
        return(
            <div>
                {/* insert jsx for the 2 column thumbnail here */}
            </div>
        )
    }
    if (props.type == "smallThumbnail"){
        return(
            <div>
                {/* insert jsx for the small thumbnail here */}
            </div>
        )
    }
}

export default Block;