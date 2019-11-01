import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Thumbnails.block.css";
import Block from "./Thumbnails.block";
import { conditionalExpression } from '@babel/types';

storiesOf('Thumbnail Block', module)
// 1 column white
    .add('1 Column White', () => <Block 
        label="Apple Macbook Pro" 
        type="columnWhite"
        white
    />)