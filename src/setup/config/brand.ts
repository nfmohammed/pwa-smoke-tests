import yargs from 'yargs';

export type Brand = 'expedia' | 'expediaie' | 'orbitz' | 'ebookers' | 'cheaptickets' | 'wotif';
const brands: readonly Brand[] = ['expedia', 'expediaie' , 'orbitz' , 'ebookers' , 'cheaptickets' , 'wotif'];
const argv = yargs.option('brand', {
  choices: brands,
  default: 'expedia'
}).argv;

// const BrandURL = ["expedia.com", "expedia.ie", "orbitz.com", "ebookers.com", "cheaptickets.com", "wotif.com"]; 
enum BrandURL {
    expedia = "expedia.com",
    expediaie = "expedia.ie",
    orbitz = "orbitz.com",
    ebookers = "ebookers.com",
    cheaptickets = "cheaptickets.com",
    wotif = "wotif.com"
}


// Brand will be specified using node param. 
// A test can override the brand by providing brand name.
export const brandURL = (brand?: Brand): String => {
    
    if (brand) {
        console.log(`Using test provided brand: ${brand}`);
        return BrandURL[brand];
    }
    console.log(`Using default brand: ${argv.brand}`);
    return BrandURL[argv.brand];
}
