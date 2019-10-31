import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Form.css"
import Form from "./Form"
import { conditionalExpression } from '@babel/types';

storiesOf('Form', module)
// text inputs
    .add('Email', () => <Form 
        label="Email" 
        type="email"
        inputType="text"
    />)
    .add('Medium Email', () => <Form
        label="Email"
        type="email"
        inputType="text"
        mediumForm
    />)
    .add('Large Email', () => <Form
        label="Email"
        type="email"
        inputType="text"
        largeForm
    />)
// select inputs
    .add('Small Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        smallSelect
    />)
    .add('Medium Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        mediumSelect
    />)
    .add('Large Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        largeSelect
    />)
// number input/counter

//text input with button
.add('Text Button', () => <Form 
    label="Voucher Code" 
    type="text-button"
    inputType="text"
/>)
.add('Large Text Button', () => <Form
    label="Voucher Code"
    type="text-button"
    inputType="text"
    largeTextButton
/>)