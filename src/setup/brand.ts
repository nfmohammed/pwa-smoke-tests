import { BRAND as ENV_BRAND} from './config';

export enum Brand {
    expedia,
    expediaie,
    orbitz,
    ebookers,
    cheaptickets,
    wotif
}

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
export const brandResolver = (brandIndex?: Brand) => {
    
    let brand;
    if (brandIndex) {
        console.log(`Using brand value from test, Brand = ${Brand[brandIndex]}`);
        brand = Brand[brandIndex];
    } else if (ENV_BRAND) {
        console.log(`Using brand value from environment. Brand = ${ENV_BRAND}`);
        brand = ENV_BRAND;
    }
    if(brand && BrandURL[brand]) {
        return BrandURL[brand];
    } else {
        throw new Error (`Either BRAND is incorrect or not specified\n. Brand value = ${brand}`);
    }
}
