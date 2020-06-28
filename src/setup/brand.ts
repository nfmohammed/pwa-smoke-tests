import * as dotenv from "dotenv";
dotenv.config();

export enum Brand {
    EXPEDIA,
    EXPEDIAIE,
    ORBITZ,
    EBOOKERS,
    CHEAPTICKETS,
    WOTIF
}

enum BrandURL {
    EXPEDIA = "expedia.com",
    EXPEDIAIE = "expedia.ie",
    ORBITZ = "orbitz.com",
    EBOOKERS = "ebookers.com",
    CHEAPTICKETS = "cheaptickets.com",
    WOTIF = "wotif.com"
}


// Brand will be specified using node param. 
// A test can override the brand by providing brand name.
export const brandResolver = (inputBrand: Brand) => {
    
    let brand = inputBrand || process.env.BRAND;
    if(brand && BrandURL[brand]) {
        return BrandURL[brand];
    } else {
        throw new Error (`Either BRAND is incorrect or not specified\n. Brand value = ${brand}`);
    }
}
