import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Select.css"
import Select from "./Select"
import { conditionalExpression } from '@babel/types';

storiesOf('Select', module)
    // White select inputs
    .add('Small White Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        smallSelect
    />)
    .add('Medium White Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        mediumSelect
    />)
    .add('Large White Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        largeSelect
    />)

    // grey select inputs
    .add('Small Grey Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        smallSelect
    />)
    .add('Medium Grey Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        mediumSelect
    />)
    .add('Large Grey Select', () => <Select 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        largeSelect
    />)