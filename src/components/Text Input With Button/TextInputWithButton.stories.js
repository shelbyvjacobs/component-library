import React from 'react';
import { storiesOf } from '@storybook/react';
import "./TextInputWithButton.css"
import TextInputWithButton from "./TextInputWithButton"
import { conditionalExpression } from '@babel/types';

storiesOf('Text Input With Button', module)
    .add('Medium Text Button', () => <TextInputWithButton  
        label="Voucher Code"
        value="Redeem" 
        type="text-button"
        inputType="text-button"
        button="medium-button"
        mediumForm
    />)
    .add('Large Text Button', () => <TextInputWithButton 
        label="Voucher Code"
        value="Redeem" 
        type="text-button"
        inputType="text-button"
        button="large-button"
        largeForm
    />)