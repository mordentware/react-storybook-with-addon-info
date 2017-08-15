import { configure } from '@storybook/react';

function loadStories() {
    require('../src/story');
}

configure(loadStories, module);
