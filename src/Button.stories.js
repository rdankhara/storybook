import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
    .addWithJSX('with background', withInfo(`description of component`)(() => (
        <Button bg="orange">Hello World </Button> 
    )))
    .addWithJSX('default props', withInfo(`component uses default props`)
    (() =>(
        <Button />
    )))
    .addWithJSX('with green background', ()=>(
        <Button bg="green">Hello Green</Button>
    ));