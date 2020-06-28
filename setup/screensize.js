require('dotenv').config();

const screenSizes = {
    extraLarge: {
        width: 1440,
        height: 990
    },
    large: {
        width: 1024,
        height: 1366
    },
    medium: {
        width: 768,
        height: 1024,
    },
    small: {
        width: 375,
        height: 812
    }
}

const evaluateScreenSize = () => {
    if (process.env.SCREEN_SIZE && screenSizes[process.env.SCREEN_SIZE]) {
        return screenSizes[process.env.SCREEN_SIZE]
    } else {
        throw new Error(`Either SCREEN_SIZE is incorrect or not specified`);
    }
}
module.exports = evaluateScreenSize();