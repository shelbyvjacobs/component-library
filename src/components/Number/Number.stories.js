import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Number.css"
import Number from "./Number"
import { conditionalExpression } from '@babel/types';

storiesOf('Number', module)
    .add('Number Counter', () => <Number
        label="Number Counter"
        type="number"
        number="2"
        plus="+"
        minus="-"
    />)