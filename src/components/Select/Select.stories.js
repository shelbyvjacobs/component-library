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
        smallSelect
    />)
    .add('Medium White Select', () => <Select 
        label="Select" 
        type="select"
        mediumSelect
    />)
    .add('Large White Select', () => <Select 
        label="Select" 
        type="select"
        largeSelect
    />)

    // grey select inputs
    .add('Small Grey Select', () => <Select 
        label="Select" 
        type="select"
        color="selectGrey"
        smallSelect
    />)
    .add('Medium Grey Select', () => <Select 
        label="Select" 
        type="select"
        color="selectGrey"
        mediumSelect
    />)
    .add('Large Grey Select', () => <Select 
        label="Select" 
        type="select"
        color="selectGrey"
        largeSelect
    />)