import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .addWithJSX('with background', () => (
        <Button bg="orange">Hello World </Button> 
    ))
    .addWithJSX('with green background', ()=>(
        <Button bg="green">Hello Green</Button>
    ));