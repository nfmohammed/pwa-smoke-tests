import yargs = require('yargs');

export type Environment = 'sandbox' | 'canary' | 'integration' | 'trunk' | 'production';

const environments: ReadonlyArray<Environment> = [ "sandbox", "canary", "integration", "trunk", "production" ];

const argv = yargs.option('environment', {
  choices: environments,
  default: 'production'
}).argv;

export const environment = argv.environment;