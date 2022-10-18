const errorColor = "#ED4337";
export default {
  fonts: {
    heading: "Abril Fatface, cursive",
    body: "Roboto Condensed, sans-serif",
  },
  colors: [
    {
      primary: "#0975f1",
      accent1: "#043a78",
      accent2: "#F29F05",
      accent4: "#d9dad9",
      accent5: "#d7e0eb",
      dark: "#000",
      dark1: "#f8f8f6",
      dark2: "#f8f8f6",
      dark3: "rgba(0,0,0,0.72)",
      light: "#f8f8f6",
      light1: "#f8f8f6",
      light2: "#f8f8f6",
      error: errorColor,
    },
  ],
  breakpoints: ["576px", "768px", "1024px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [6, 12, 14, 16, 20, 24, 32, 48, 72, 120, 200],
  fontWeights: {
    normal: 400,
    bold: 700,
    bolder: 900,
  },
  shadows: {
    tiny: "0 1.5px 5px 0 rgba(0, 0, 0, 0.1)",
    small: "0px 0px 5px 0px rgba(0,0,0,0.2)",
    tabs: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
  },
  buttons: {
    primary: {
      backgroundColor: "red",
      fontSize: "2rem",
    },
    transparent: {
      backgroundColor: "transparent",
      color: "red",
      borderColor: "red",
      border: "1px solid",
    },
  },
  cards: {
    primary: {
      backgroundColor: "red",
      boxShadow: "0 1.5px 5px 0 rgba(0, 0, 0, 0.1)",
    },
  },
};
