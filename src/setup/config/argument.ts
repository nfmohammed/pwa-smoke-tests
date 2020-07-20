// import yargs from 'yargs';

// //Configure Brand
// export type Brand = 'expedia' | 'expediaie' | 'orbitz' | 'ebookers' | 'cheaptickets' | 'wotif';
// const brands: readonly Brand[] = ['expedia', 'expediaie' , 'orbitz' , 'ebookers' , 'cheaptickets' , 'wotif'];
// yargs.option('brand', {
//   choices: brands,
//   default: 'expedia'
// }).argv;
// export const brand = yargs.argv.brand;

// //Configure Environment
// export type Environment = 'sandbox' | 'canary' | 'integration' | 'trunk' | 'production';
// const environments: ReadonlyArray<Environment> = [ "sandbox", "canary", "integration", "trunk", "production" ];
// yargs.option('environment', {
//   choices: environments,
//   default: 'production'
// }).argv;
// export const environment = yargs.argv.environment;

// //Configure ScreenSize
// export type ScreenSize = 'extraLarge' | 'large' | 'medium' | 'small';
// const screenSizes: readonly ScreenSize[] = ['extraLarge' , 'large' , 'medium' , 'small'];

// yargs.option('screenSize', {
//     choices: screenSizes,
//     default: 'medium'
//   }).argv;

// type ScreenType = {
//     [key in ScreenSize]: any;
//  } 

// const screenSizeValues: ScreenType = {
//     extraLarge: {
//         width: 1440,
//         height: 990
//     },
//     large: {
//         width: 1024,
//         height: 1366
//     },
//     medium: {
//         width: 768,
//         height: 1024,
//     },
//     small: {
//         width: 375,
//         height: 812
//     }
// }
// const screensize: ScreenSize | any = yargs.argv.screenSize;
// export const screenSize = screenSizeValues[screensize];