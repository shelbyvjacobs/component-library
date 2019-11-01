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
            <div>
                {/* insert jsx for the 1 column thumbnail here */}
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