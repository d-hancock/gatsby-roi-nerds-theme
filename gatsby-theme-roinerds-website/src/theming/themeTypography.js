// https://material-ui.com/customization/typography/#responsive-font-sizes
import { responsiveFontSizes } from "@material-ui/core";

// export const themeTypography = (theme) => {
//     theme.typography.h1 = {
//         ...theme.typography.h1,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.h2 = {
//         ...theme.typography.h2,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.h3 = {
//         ...theme.typography.h3,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.h4 = {
//         ...theme.typography.h4,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.h5 = {
//         ...theme.typography.h5,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.h6 = {
//         ...theme.typography.h6,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.body1 = {
//         ...theme.typography.body1,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.body2 = {
//         ...theme.typography.body2,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.subtitle1 = {
//         ...theme.typography.subtitle1,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.subtitle2 = {
//         ...theme.typography.subtitle2,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.button = {
//         ...theme.typography.button,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.caption = {
//         ...theme.typography.caption,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//     theme.typography.overline = {
//         ...theme.typography.overline,
//         [theme.breakpoints.only("xs")]: {},
//         [theme.breakpoints.only("sm")]: {},
//         [theme.breakpoints.only("md")]: {},
//         [theme.breakpoints.only("lg")]: {},
//         [theme.breakpoints.only("xl")]: {},
//     };
//
//     return theme;
// };

export const themeTypography = theme => {
  theme = responsiveFontSizes(theme, {
    breakpoints: theme.breakpoints.keys,
  });
  return theme;
};
