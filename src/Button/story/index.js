import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../';
import imported from './imported';

storiesOf('Button', module)
    .add('Normal', () => <Button>Normal</Button>)
    .add('Normal w/ Info', withInfo('Default Button')(() => <Button>Normal With Info</Button>))
    .add('Imported', imported.normal)
    .add('Imported w/ Info', imported.normalWithInfo)
