import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Thumbnails.block.css";
import Block from "./Thumbnails.block";
import macbook from "../Thumbnails Block/Thumbnails.block-img/Macbook.png"
import rating from "../Thumbnails Block/Thumbnails.block-img/rate.svg"
import beats from "../Thumbnails Block/Thumbnails.block-img/Beats.png"
import blueHeart from "../Thumbnails Block/Thumbnails.block-img/blue-heart.svg"
import blueCart from "../Thumbnails Block/Thumbnails.block-img/blue-cart.svg"
import whiteHeart from "../Thumbnails Block/Thumbnails.block-img/white-heart.svg"
import whiteCart from "../Thumbnails Block/Thumbnails.block-img/white-cart.svg"
import { conditionalExpression } from '@babel/types';

storiesOf('Thumbnails', module)
// 1 column white
    .add('1 Column White', () => <Block
        image={macbook} 
        name="Apple Macbook Pro" 
        rating={rating}
        salePrice="$499"
        price="$500"
        type="column"
        container="container"
        opacity="opacity"
        thumbnailHover="thumbnailHover"
        iconBackground="iconBackground"
        button="clearButton"
        icon1={blueHeart}
        icon2={blueCart}
        white
    />)
// 1 column grey
    .add('1 Column Grey', () => <Block
        image={macbook} 
        name="Apple Macbook Pro" 
        rating={rating}
        salePrice="$499"
        price="$500"
        type="column"
        opacity="opacity"
        thumbnailHover="thumbnailHover"
        iconBackground="iconBackground"
        button="blueButton"
        icon1={whiteHeart}
        icon2={whiteCart}
        grey
    />)

// 1 column hover icons white (include in 1 column white?)

// 1 column hover icons blue (include in 1 column grey?)

// 2 column white (w/ grey hover)
    .add('2 Column White', () => <Block
        image={macbook} 
        name="Apple Macbook Pro" 
        rating={rating}
        salePrice="$499"
        price="$500"
        type="doubleColumn"
        leftDiv="leftDiv"
        rightDiv="rightDiv"
        white
    />)

// small thumbnail
    .add('Small Thumbnail', () => <Block
        image={beats}
        name="Beats Solo 2 On Ear Headphones - Black"
        rating={rating}
        salePrice="$499"
        price="$500"
        type="smallThumbnail"
        leftDiv="leftDiv"
        rightDiv="rightDiv"
        white
    />)

// inline thumbnail

