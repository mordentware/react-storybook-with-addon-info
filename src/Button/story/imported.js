import React from 'react';
import Button from '../';
import { withInfo } from '@storybook/addon-info';

function normal() {
    return <Button>Imported</Button>;
}

const normalWithInfo = withInfo('Default Button')(() => <Button>Imported With Info</Button>);

export default {
    normal,
    normalWithInfo,
};
