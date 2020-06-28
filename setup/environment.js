require('dotenv').config();

const environments = {
    sandbox: "sandbox", 
    canary: "canary", 
    integration: "integration", 
    trunk: "trunk",
    production: "production"
}

//Environment is defined only using node param. 
//Individual test will not have ability to override environment.
const evaluateEnvironment = () => {
    if(process.env.ENVIRONMENT && environments[process.env.ENVIRONMENT]) {
        return environments[process.env.ENVIRONMENT]
    } else {
        throw new Error (`Either ENVIRONMENT is incorrect or not specified`);
    }
}
module.exports = evaluateEnvironment();