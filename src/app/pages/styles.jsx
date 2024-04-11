import localFont from 'next/font/local'

export const graphie = localFont({
    src: [
        {
            path: '../../resources/fonts/graphie/Graphie-Thin.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-Book.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-ExtraLight.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-ThinItalic.otf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../resources/fonts/graphie/Graphie-LightItalic.otf',
            weight: '300',
            style: 'italic',
        },
        // ... Add entries for other italic weights if available
    ],
    display: 'swap', // Controls font loading behavior (optional)
    variable: '--font-graphie', // CSS variable name for the font (optional)
});


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

export const button = {
    primary: "#0075FF",
    secondary: "#333",
    background: "#FFD300",
}

export const newBackground = {
    yellow: "#E1FF0F",
    orange: "#FF7133",
    orangeLight: "#ff814b",
    green: "#005940",
    white: "#FCFCFA",
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