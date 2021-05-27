import React from "react";
import {action} from "@storybook/addon-actions";
import '../src/styles/tailwind.css'
import {addDecorator} from '@storybook/react';
import {withPerformance} from 'storybook-addon-performance';
import {withConsole} from '@storybook/addon-console';
import {
    MINIMAL_VIEWPORTS,
    INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
// import { withThemeProvider } from './sbDecorators';
// import { ThemeProvider } from '@material-ui/styles';
import {theme as roiTheme} from '../src/theming/theme';
// import {withThemes} from '@react-theming/storybook-addon';
import {providerFn} from './utils';
import {DocsPage} from 'storybook-addon-deps/blocks';

// --- Parameters ---
// Parameters for Backgrounds
const backgrounds = {
    default: 'Light Grey',
    values: [
        {name: 'White', value: '#ffffff'},
        {name: 'Black', value: '#000000'},
        {name: 'Light Grey', value: '#D3D3D3'},
        {name: 'Dark Grey', value: '#A9A9A9'},
        {name: 'Transparent', value: '#00FFFFFF'},
    ],
};

// Parameters for Paddings
const paddings = {
    values: [
        {name: 'Small', value: '16px'},
        {name: 'Medium', value: '32px'},
        {name: 'Large', value: '64px'},
    ],
};

// Custom Viewports
const customViewports = {
    optiDemo: {
        name: 'Opti Demo',
        styles: {
            width: '600px',
            height: '700px',
        },
    },

};
// Parameter for Viewports
const viewport = {
    viewports: {
        ...customViewports,
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
    },
};

// Custom Toolbars
// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'theFrontTheme',
//     toolbar: {
//       icon: '',
//       items: ['theFrontTheme', 'baseTheme', 'defaultTheme'],
//     },
//   },
// };

// Legacy global addition of decorators from Storybook v5
// Decorator for adding console output to actions.
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    docs: {page: DocsPage},
    dependencies: {withStoriesOnly: true, hideEmpty: true},
    backgrounds,
    viewport,
    paddings,
    controls: {expanded: true},
};
export const decorators = [
    // My theme provider toolbar
    // withThemeProvider,
    // ---------------------
    // Storybook addon @ReactTheming
    // withThemes(null, [theFrontTheme, defaultTheme, baseTheme], {providerFn}),
    withPerformance,
    // muiTheme(),
];

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context. We override it to empty functions (no-op),
// so gatsby link doesn't throw any errors.
global.___loader = {
    enqueue: () => {
    },
    hovering: () => {
    },
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash we need to set it as well.
global.__PATH_PREFIX__ = "";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In storybook it doesn't make sense to do an actual navigate, instead we want to log an action. Checkout the actions addon docs https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
    action("NavigateTo:")(pathname);
};
