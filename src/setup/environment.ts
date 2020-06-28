import * as dotenv from "dotenv";
dotenv.config();

enum Environment {
    SANDBOX = "sandbox", 
    CANARY = "canary", 
    INTEGRATOIN = "integration", 
    TRUNK = "trunk",
    PRODUCTION = "production"
}

//Environment is defined only using node param. 
//Individual test will not have ability to override environment.
const evaluateEnvironment = () => {
    if(process.env.ENVIRONMENT && Environment[process.env.ENVIRONMENT]) {
        return Environment[process.env.ENVIRONMENT]
    } else {
        throw new Error (`Either ENVIRONMENT is incorrect or not specified`);
    }
}

export const environment = evaluateEnvironment();