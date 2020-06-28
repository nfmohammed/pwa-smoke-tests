require('dotenv').config();

const brand = {
    expedia : 1,
    expediaie : 2,
    orbitz : 3,
    ebookers : 4,
    cheaptickets : 5,
    wotif : 6
}
const brandURLs = {
    1 : "expedia.com",
    2 : "expedia.ie",
    3 : "orbitz.com",
    4 : "ebookers.com", 
    5 : "cheaptickets.com",
    6 : "wotif.com"
}

// Brand will be specified using node param. 
// A test can override the brand by providing brand name.
const brandResolver = (brandIndex) => {
    
    brandIndex = brandIndex || brand[process.env.BRAND];
    if(brandIndex && brandURLs[brandIndex]) {
        return brandURLs[brandIndex];
    } else {
        throw new Error (`Either BRAND is incorrect or not specified\n. BrandIndex resolved to ${brandIndex}`);
    }
}
module.exports = { brand,  brandResolver }