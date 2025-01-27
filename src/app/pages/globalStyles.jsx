export const headerMargin = "84px"
export const containerWidth = "1280px"
export const containerPadding = "54px"
export const registerContainerWidth = "877px"
export const modalBackdrop = "rgba(0, 0, 0, 0.4)"
export const modalBackdropGreen = "rgba(0, 89, 64, 0.4)"
export const inputHeight = "42px"
export const defaultBorderRadius = "10px"

export const messages = {
    success: {
        title: "#005940",
        background: "#E6EEEC",
        border: "#005940",
    },
    error: {
        title: "#FF7133",
        background: "#FFF1EB",
        border: "#FF7133",
    }

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
    pending: "#FF7133",
    canceled: "#ff4b33",
    scheduled: "#FDDCCB",
}
export const newFontStatusColors = {
    due: "#FF7133",
    paid: "#FFF",
    pending: "#FFF",
    canceled: "#FFF",
    scheduled: "#FF7133",
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
    greenTranslucent: "#E6EEEC",
    greenLight: "#B0CBC2",
    greenSoft: "#81AD9F",
    black: "#313131",
    blackLight: "##4B4747",
    grey: "#EFEFEC",
    greyBorder: "#A3A3A3",
    greyTranslucent: "#D5D5D5",
    greyMedium: "#BBB",
    greyMediumHigh: "#727272",
    greyHigh: "#787878",
    greyDark: "#7c7c7c",
    greyDarker: "#535353",
    greyTranslucent: "#F1F1F1",
    orangeLight: "#FF8D5C",
    orangeHigh: "#FFBEA1",
    orangeFocused: "#FDDCCB",
    orangeTranslucent: "#FFF1EB",
}

export const removeBackdropOverflow = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${window?.innerWidth - document.documentElement.clientWidth}px`;
    }
};
export const resetBackdropOverflow = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.paddingRight = ``;
    }
};
