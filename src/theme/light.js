import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  type: "light",
  color1: "#c165dd",
  color2: "#5c27fe",
  color3: "#2afeb7",
  color4: "#ff7b02",
  color5: "#ffffff",
  textColor1: "#ffffff",
  textColor2: "#4c4c4c",
};

const breakpoints = {
  horizontal: 850,
};

// TODO: temporary. Update it according to prototype
const font = {
  size: 14,
  title: { size: 45 },
  subtitle: { size: 30 },
  weight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  lineHeight: "1.5",
};

const typography = {
  fontFamily: "Montserrat",
  fontSize: font.size,
  lineHeight: font.lineHeight,
  fontWeightLight: font.weight.light,
  fontWeightRegular: font.weight.regular,
  fontWeightSemiBold: font.weight.semiBold,
  fontWeightBold: font.weight.bold,
  fontWeightBlack: font.weight.black,
  title: {
    fontSize: font.title.size,
  },
  subtitle: {
    fontSize: font.subtitle.size,
  },
};

const shape = {
  borderRadius: 5,
  scrollSize: 5,
  scrollRadius: 5,
};

const shadows = [];

const transitions = {
  default: "0.2s ease-in-out",
};

export const light = createMuiTheme({
  breakpoints,
  typography,
  palette,
  shadows,
  shape,
  transitions,
});
