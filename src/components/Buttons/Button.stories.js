import React from 'react';
import { storiesOf } from '@storybook/react';
import "./Button.css"
import cart from '../Buttons/Button-img/cart_2.svg';
import heart from '../Buttons/Button-img/hearts.svg';
import Button from './Button';
import { conditionalExpression } from '@babel/types';

storiesOf('Button', module)
// basic buttons
    .add('Primary', () => <Button 
        label="Primary" 
        type= "primary"
    />)
    .add('Danger', () => <Button 
        label="Danger" 
        type="danger"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Warning"
        type="warning"
    />)
    .add('Default', () => <Button
        label="Default"
        type="default"
    />)
// large basic buttons
    .add('Large Primary', () => <Button
        label="Large"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Large"
        type="danger"
        large
    />)
    .add('Large Success', () => <Button
        label="Large"
        type="success"
        large
    />)
    .add('Large Warning', () => <Button
        label="Large"
        type="warning"
        large
    />)
    .add('Large Default', () => <Button
        label="Large"
        type="default"
        large
    />)
// buttons with white backgrounds
    .add('Primary Invert', () => <Button
        label="Primary"
        type="primary-invert"
    />)
    .add('Danger Invert', () => <Button
        label="Danger"
        type="danger-invert"
    />)
    .add('Success Invert', () => <Button
        label="Success"
        type="success-invert"
    />)
    .add('Warning Invert', () => <Button
        label="Warning"
        type="warning-invert"
    />)
    .add('Default Invert', () => <Button
        label="Default"
        type="default-invert"
    />)
// large buttons with white backgrounds
    .add('Large Primary Invert', () => <Button
        label="Primary"
        type="primary-invert"
        large
    />)
    .add('Large Danger Invert', () => <Button
        label="Danger"
        type="danger-invert"
        large
    />)
    .add('Large Success Invert', () => <Button
        label="Success"
        type="success-invert"
        large
    />)
    .add('Large Warning Invert', () => <Button
        label="Warning"
        type="warning-invert"
        large
    />)
    .add('Large Default Invert', () => <Button
        label="Default"
        type="default-invert"
        large
    />)
// buttons with lighter background
    .add('Primary Light', () => <Button
        label="Primary"
        type="primary-light"
    />)
    .add('Danger Light', () => <Button
        label="Danger"
        type="danger-light"
    />)
    .add('Success Light', () => <Button
        label="Success"
        type="success-light"
    />)
    .add('Warning Light', () => <Button
        label="Warning"
        type="warning-light"
    />)
    .add('Default Light', () => <Button
        label="Default"
        type="default-light"
    />)
// larger buttons with lighter backgrounds
    .add('Large Primary Light', () => <Button
        label="Primary"
        type="primary-light"
        large
    />)
    .add('Large Danger Light', () => <Button
        label="Danger"
        type="danger-light"
        large
    />)
    .add('Large Success Light', () => <Button
        label="Success"
        type="success-light"
        large
    />)
    .add('Large Warning Light', () => <Button
        label="Warning"
        type="warning-light"
        large
    />)
    .add('Large Default Light', () => <Button
        label="Default"
        type="default-light"
        large
    />)
// icon buttons
    .add('Cart', () => <Button
        type="primary-light"
        icon={cart}
    />)
    .add('Heart', () => <Button
        type="primary-light"
        icon={heart}
    />)
// icon buttons with labels
    .add('Add To Cart', () => <Button
        label="Add To Cart"
        type="primary-light"
        icon={cart}
    />)
    .add('Add To Favorites', () => <Button
        label="Add To Cart"
        type="primary-light"
        icon={heart}
    />)
    