const { brand } = require("../../setup/brand");
const baseUrl = require('../../setup/base_url');
console.log(baseUrl()); //
console.log(baseUrl(brand.orbitz));
console.log(baseUrl(brand.ebookers));


