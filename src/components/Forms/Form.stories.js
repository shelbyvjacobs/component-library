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
    .add('Number Counter', () => <Form
        label="Number Counter"
        type="number"
        inputType="number"
    />)

//text input with button
    .add('Medium Text Button', () => <Form 
        label="Voucher Code" 
        type="text-button"
        inputType="text-button"
        button="medium-button"
        mediumForm
    />)
    .add('Large Text Button', () => <Form
        label="Voucher Code"
        type="text-button"
        inputType="text-button"
        button="large-button"
        largeForm
    />)

//checkbox
    .add('Black Checkbox', () => <Form
        type="checkbox"
        inputType="checkbox"
        color="black"
    />)
    .add('Blue Checkbox', () => <Form
        type="checkbox"
        inputType="checkbox"
        color="blue"
    />)
    .add('Black Checkbox No Popups', () => <Form
        type="checkbox"
        inputType="checkbox"
        color="black"
    />)