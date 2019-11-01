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
        paragraph="paragraph"
    />)
    .add('Medium Email', () => <Form
        label="Email"
        type="email"
        inputType="text"
        paragraph="paragraph"
        mediumForm
    />)
    .add('Large Email', () => <Form
        label="Email"
        type="email"
        inputType="text"
        paragraph="paragraph"
        largeForm
    />)
// select inputs
    .add('Small White Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        smallSelect
    />)
    .add('Medium White Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        mediumSelect
    />)
    .add('Large White Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        largeSelect
    />)

// grey select inputs
    .add('Small Grey Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        smallSelect
    />)
    .add('Medium Grey Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        mediumSelect
    />)
    .add('Large Grey Select', () => <Form 
        label="Select" 
        type="select"
        inputType="select"
        color="selectGrey"
        largeSelect
    />)

// number input/counter; ADD FUNCTIONALITY
    .add('Number Counter', () => <Form
        label="Number Counter"
        type="number"
        inputType="number"
        number="2"
        plus="+"
        minus="-"
    />)

//text input with button
    .add('Medium Text Button', () => <Form 
        label="Voucher Code"
        value="Redeem" 
        type="text-button"
        inputType="text-button"
        button="medium-button"
        mediumForm
    />)
    .add('Large Text Button', () => <Form
        label="Voucher Code"
        value="Redeem" 
        type="text-button"
        inputType="text-button"
        button="large-button"
        largeForm
    />)

//checkbox
    .add('Black Checkbox', () => <Form
        type="checkbox"
        inputType="checkbox"
        border="checkmarkBlack"
        color="black"
    />)
    .add('Blue Checkbox', () => <Form
        type="checkbox"
        inputType="checkbox"
        border="checkmarkBlue"
        color="blue"
    />)
    .add('Black Checkbox No Popups', () => <Form
        type="checkbox"
        inputType="checkbox"
        border="checkmarkBlack"
        color="black"
        label="Don't show this popup again"
        labelClass="label"
    />)