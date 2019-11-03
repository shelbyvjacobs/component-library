import React from 'react';
import { storiesOf } from '@storybook/react';
import "./TextInput.css"
import TextInput from "./TextInput"
import { conditionalExpression } from '@babel/types';

storiesOf('Text Input', module)
    .add('Email', () => <TextInput  
        label="Email" 
        type="email"
        paragraph="paragraph"
    />)
    .add('Medium Email', () => <TextInput  
        label="Email"
        type="email"
        paragraph="paragraph"
        mediumForm
    />)
    .add('Large Email', () => <TextInput  
        label="Email"
        type="email"
        paragraph="paragraph"
        largeForm
    />)