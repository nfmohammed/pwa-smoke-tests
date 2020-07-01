import { ENVIRONMENT } from './config'

const environments = [ "sandbox", "canary", "integration", "trunk","production" ]; 

//Environment is defined only using node param. 
//Individual test will not have ability to override environment.
const evaluateEnvironment = () => {
    if(ENVIRONMENT && environments.includes(ENVIRONMENT)) {
        return ENVIRONMENT
    } else {
        throw new Error (`Either ENVIRONMENT is incorrect or not specified`);
    }
}

export const environment = evaluateEnvironment();