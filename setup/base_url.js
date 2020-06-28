const { brandResolver } = require("./brand");
const environment = require("./environment");

const baseUrl = (brandIndex) => {
    let brandProdURL = brandResolver(brandIndex);
    let dotlessBrand = brandProdURL.split(".").join("");
    let url='';
    if (environment === "sandbox") {
        url = `https://www${dotlessBrand}.sandbox.dev.sb.karmalab.net:8443`;
    } else if (environment === "canary") {
        url = `http://www${dotlessBrand}.canary-shopping-pwa.us-west-2.prod.expedia.com/isWorking`
    } else if (environment === "integration" || environment === "trunk"){
        url = `https://www${dotlessBrand}.${environment}.sb.karmalab.net`;
    } else {
        url = `https://${brandProdURL}`;
    }
    return url;
}

module.exports = baseUrl;
