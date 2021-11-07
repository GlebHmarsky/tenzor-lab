import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: 'SF Pro Rounded',
  fontSize: 25,
  htmlFontSize: 25,
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.571,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  body2: {
    fontSize: '0.7rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  caption: {
    fontSize: '0.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  fontWeightLight: 200,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  // fontWeightSemibold: 700, //TODO: resarch for using costom theme?
  fontWeightBold: 800,
  // fontWeightHeavy: 900,
};

export default typography;
