import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Thumbnails.block.css";
import Block from "./Thumbnails.block";
import { conditionalExpression } from '@babel/types';

storiesOf('Thumbnail Block', module)
// 1 column white
    .add('1 Column White', () => <Block 
        label="Apple Macbook Pro" 
        type="column"
        white
    />)
// 1 column grey
    .add('1 Column Grey', () => <Block
        label="Apple Macbook Pro"
        type="column"
        grey
    />)

// 1 column hover icons white (include in 1 column white?)

// 1 column hover icons blue (include in 1 column grey?)

// 2 column white (w/ grey hover)
    .add('2 Column White', () => <Block
        label="Apple Macbook Pro"
        type="doubleColumn"
        white
    />)

// small thumbnail
    .add('Small Thumbnail', () => <Block
        label="Beats Solo 2 On Ear Headphones"
        type="smallThumbnail"
    />)
