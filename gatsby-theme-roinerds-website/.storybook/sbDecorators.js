import {
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core/styles';
import React from 'react';
// import {defaultTheme, baseTheme, theFrontTheme} from '../src/theming/MuiTheming/theme';
import {theme as roiTheme} from "../src/theming/theme";

// Decorator for providing the material ui themes selected from toolbar.

export const withThemeProvider = (Story, context) => {
    const theme = getTheme(context.globals.theme);

    return (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};
// Function for selecting theme using context globals from available themes.
const getTheme = theme => {
    if (themes[theme]) {
        return themes[theme];
    } else {
        return roiTheme;
    }
};

// Available themes.
const themes = {

    default: roiTheme,
    baseTheme: roiTheme,
};

export const withMargin = (Story, context) => (
    <div style={{margin: '3em'}}>
        <Story {...context} />
    </div>
);

export const withRelativeContainer = (Story, context) => (
    <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        margin: 'auto',
    }}>

        <Story {...context} />
    </div>
);

export const withCentered = (Story, context) => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Story {...context} />
    </div>
);
