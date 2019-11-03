import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Checkbox.css"
import Checkbox from "./Checkbox"
import { conditionalExpression } from '@babel/types';

storiesOf('Checkbox', module)
    .add('Black Checkbox', () => <Checkbox 
        type="checkbox"
        border="checkmarkBlack"
        color="black"
    />)
    .add('Blue Checkbox', () => <Checkbox 
        type="checkbox"
        border="checkmarkBlue"
        color="blue"
    />)
    .add('Black Checkbox No Popups', () => <Checkbox 
        type="checkbox"
        border="checkmarkBlack"
        color="black"
        label="Don't show this popup again"
        labelClass="label"
    />)