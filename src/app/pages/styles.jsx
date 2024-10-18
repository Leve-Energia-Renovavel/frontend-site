import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import { fadeInUp } from "./animations";

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

export const background = {
    orange: "#FF7133",
    yellow: "#E1FF0F",
    green: "#005940",
    white: "#FFFFFF",
    greenLight: "#B0CBC2",
    greenSoft: "#81AD9F",
    grey: "#EFEFEC",
    greyMedium: "#BBB",
    greyMediumHigh: "#757575",
    greyHigh: "#787878",
    greyDark: "#838383",
    greyTranslucent: "#F3F3F1",
    orangeLight: "#FF8D5C",
    orangeHigh: "#FFBEA1",
    orangeFocused: "#FDDCCB",
    orangeTranslucent: "#FFF1EB",
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