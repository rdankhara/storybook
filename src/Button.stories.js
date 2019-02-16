import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
    .addWithJSX('with background', withInfo(`description of component`)(() => (
        <Button bg="orange">Hello World </Button> 
    )))
    .addWithJSX('with green background', ()=>(
        <Button bg="green">Hello Green</Button>
    ));