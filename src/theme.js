import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(20, 51, 101, 0.3)",
    },
    secondary: {
      main: "#1b86d1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#001e57",
    },
    text: {
      primary: "#cbced1", 
      secondary: "#C2E8F0",
    },
    action: {
      disabled: "#ffffff",
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: '#ffffff',
        '&$checked': {
          color: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#4A90E2",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "#4A90E2",
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: "#6589aa",
        "&$focused": {
          color: "#4A90E2",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:placeholder": {
          color: "#ffffff",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#052a60",
          color: "#ffffff",
        },
        color: "#ffffff", //input color focus of not
        backgroundColor: "#00163f", //background color of whole input
        "&:hover:not($disabled):after": {
          backgroundColor: "orange", //its when its hover and input is focused
        },
        "&:hover:not($disabled):before": {
          backgroundColor: "yellow", //its when you hover and input is not foucused
        },
        "&:after": {
          backgroundColor: "red", //when input is focused, Its just for example. Its better to set this one using primary color
        },
        "&:before": {
          backgroundColor: "red", // when input is not touched
        },
        "&:label": {
          color: "#ffffff",
        },
        "&:label.Mui-focused": {
          color: "#ffffff",
        },
        "&:.MuiInput-underline:after": {
          borderBottomColor: "#ffffff",
        },
        "&:.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ffffff",
          },
          "&:hover fieldset": {
            borderColor: "#ffffff",
            borderWidth: "0.15rem",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
