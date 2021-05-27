import React from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { themeTypography } from "./themeTypography";

export let theme = createMuiTheme({
  // palette: {
  //     primary: {
  //         main: '#11122b'
  //     },
  // },
});

// revTheme = responsiveFontSizes(revTheme);
theme = themeTypography(theme);

export let defaultTheme = createMuiTheme();

export default theme;
