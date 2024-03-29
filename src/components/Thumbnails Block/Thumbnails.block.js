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
        classList += ` container white`
    }
    if (props.grey) {
        classList += ` container grey`
    }
    if (props.type == "column"){
        return(
            <div className="test">
                <div className={classList}>
                    <div><img src={props.image}></img></div> 
                    <hr></hr>
                    <div><h2>{props.name}</h2></div>
                    <div><img src={props.rating} className="rating"></img></div>
                    <div><h3>{props.salePrice}</h3> <h4>{props.price}</h4></div>
                </div>
                <div className={props.thumbnailHover}>
                    {/* refactor to make icons the background? so that they aren't cut off by the padding */}
                    <div className={props.iconBackground}><img src={props.icon1} className={props.button}></img></div>
                    <div className={props.iconBackground}><img src={props.icon2} className={props.button}></img></div>
                </div>
            </div>
        )
    }
    if (props.type == "doubleColumn"){
        return(
            <div className={classList}>
                <div className={props.leftDiv}><img src={props.image}></img></div>
                <div className={props.rightDiv}>
                    <div><h2>{props.name}</h2></div>
                    <div><img src={props.rating} className="rating"></img></div>
                    <div><h3>{props.salePrice}</h3> <h4>{props.price}</h4></div>
                </div>
            </div>
        )
    }
    if (props.type == "smallThumbnail"){
        return(
            <div className={classList}>
                <div className={props.leftDiv}><img src={props.image}></img></div>
                <div className={props.rightDiv}>
                    <div><h2>{props.name}</h2></div>
                    <div><img src={props.rating} className="rating"></img></div>
                    <div><h3>{props.salePrice}</h3> <h4>{props.price}</h4></div>
                </div>
            </div>
        )
    }
}

export default Block;