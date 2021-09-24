import * as React from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { Color, SimplePaletteColorOptions, ThemeOptions } from "@mui/material";
import { Direction } from "@mui/system";

const secondary: SimplePaletteColorOptions & Partial<Color> = {
  main: "#09b6c7",
  contrastText: "#fff",
  dark: "#048f9c",
  light: "#e6f7f9",
  "900": "rgba(132, 219, 227, 0.5)",
  "800": "#c8f5ed",
  "700": "rgba(230, 247, 249, 0.51)",
  "600": "#e4faf6",
  "500": "rgba(230, 247, 249, 0.6)",
  "400": "#e3f6f2",
  "300": "#84dbe3",
  "200": "#cdeff3",
  "100": "rgba(9, 182, 199, 0.7)",
  A100: "#e4faf680",
  A200: "#e6f7f980",
};
const primary = {
  main: "#00d1ab",
  light: "#43c3a3",
  dark: "#00be9b",
  contrastText: "#9aedde",
  "100": "#dcf9f3",
  "200": "#e4faf6",
  "300": "rgba(0, 209, 171, 0.7)",
} as const;
const grey = {
  "100": "#ffffff",
  "200": "#f9f9f9",
  "300": "#f3f3f3",
  "400": "#d6d6d8",
  "500": "#bcbdbf",
  "600": "#7b818b",
  "700": "#dedcdd",
  "800": "#999da5",
  "900": "#21242a",
} as const;
const warning: SimplePaletteColorOptions | Partial<Color> = {
  main: "#f6c907",
  light: "#fceca8",
  dark: "#d7b211",
  "100": "#fdf3c8",
  "200": "#fefae6",
  "300": "rgba(246, 201, 7, 0.7)",
  A100: "#fefae680",
};
const error: SimplePaletteColorOptions | Partial<Color> = {
  main: "#e94d4d",
  light: "#fdeeee",
  dark: "#d33b3b",
  "100": "#f0d2bf",
  "200": "#fe8e8c",
  A100: "#fdeeee80",
};

const themeOptions: ThemeOptions = {
  palette: {
    primary,
    secondary,
    grey,
    warning,
    error,
  },
};

const defaultContext: any = {
  direction: "ltr",
  setDirection: (direction: Direction) => {
    /** void */
  },
};
const ThemeContext = React.createContext(defaultContext);
export default ThemeContext;

export const ThemeProvider: React.FC = (props) => {
  const [direction, setDirection] = React.useState<Direction>(
    defaultContext.direction
  );

  React.useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  const theme = createTheme({
    ...themeOptions,
    direction,
  });

  return (
    <ThemeContext.Provider value={{ direction, setDirection }}>
      <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
