import styled from "@emotion/styled";
import { Alert, keyframes } from "@mui/material";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const theme = {
    primary: "#1779ba",
    primaryFocus: "#126195",
    secondary: "#767676",
    secondaryFocus: "#5e5e5e",
}

export const notification = {
    success: "#3adb76",
    successFocus: "#22bb5b",
    warning: "#ffae00",
    warningFocus: "#cc8b00",
    // alert: "#cc4b37",
    alert: "#f00",
    alertFocus: "#67251a",
}
export const statusColors = {
    paid: "#3adb76",
    paidFocus: "#22bb5b",
    warning: "#ffae00",
    warningFocus: "#cc8b00",
    pending: "#F44336",
    pendingFocus: "#ab1d13",
}
export const newStatusColors = {
    due: "#FDDCCB",
    paid: "#005940",
    pending: "#FF7133"
}
export const newFontStatusColors = {
    due: "#FF7133",
    paid: "#FFF",
    pending: "#FFF"
}

export const button = {
    primary: "#0075FF",
    secondary: "#333",
    background: "#FFD300",
}

export const partners = {
    tribanco: {
        blue: "#054375",
        lightBlue: "#0BAFB5",
        green: "#7ACC44"
    },
    tim: {
        red: "#E40D2C",
        blue: "#063B88",
    },
    martins: {
        white: "#FCFCFA",
        blue: "#003876",
    },
    localiza: {
        green: "#005941",
        vividGreen: "#03602A",
        lightGreen: "#77DE1F",
    },
    yduqs: {
        blue: "#13284C",
        lightBlue: "#4395BA",
    },
    allya: {
        pink: "#F73E6E",
        white: "#FCFCFA"
    },
}

export const newBackground = {
    yellow: "#E1FF0F",
    orange: "#FF7133",
    orangeLight: "#f89368",
    orangeHigh: "#FAB681",
    orangeFocused: "#FDDCCB",
    orangeTranslucent: "#FCEEE6",
    green: "#005940",
    greenLight: "#B0CBC2",
    greenSoft: "#81AD9F",
    white: "#FCFCFA",
    grey: "#EFEFEC",
    greyMedium: "#BBB",
    greyMediumHigh: "#757575",
    greyHigh: "#787878",
    greyDark: "#838383",
    greyTranslucent: "#F3F3F1",
}

export const background = {
    primary: "#0075FF",
    secondary: "#FFD300",
    secondaryLight: "#fce053",
    blueLeve: "#0075FF",
    yellowLeve: "#FFE04C",
    orangeLeve: "#EB641B",
    error: "#F00",
    light: "#fefefe",
    dark: "#0a0a0a",
    lightBorder: "#e6e6e6",
    mediumGrey: "#B0BEC5",
    higherGrey: "#a8a8a8",
    grey: "#7F7F7F",
    darkGrey: "#343434",
    white: "#FFFFFF",
    stroke: "#CACACB",
    greyLeve: "#F5F5F5",
    textLeve: "#343434",

}

export const SnackbarMessageAlert = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.alert};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`
export const SnackbarMessageNotification = styled(Alert)`
  font-family: "Graphie";
  font-size: 1rem;
  background-color: ${notification.success};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;

  animation: ${fadeInUp} 0.5s ease-out;

  @media screen and (max-width: 600px) {
    padding: .3rem;
    font-size: 1rem; 
  }

`