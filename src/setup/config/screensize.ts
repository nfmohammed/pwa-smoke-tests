import yargs from 'yargs';

export type ScreenSize = 'extraLarge' | 'large' | 'medium' | 'small';
const screenSizes: readonly ScreenSize[] = ['extraLarge' , 'large' , 'medium' , 'small'];

const argv = yargs.option('screensize', {
    choices: screenSizes,
    default: 'medium'
  }).argv;
  
const screenSizeValues = {
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

export const screenSize = screenSizeValues[argv.screensize];