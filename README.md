#### End2End framework based on puppeteer

Commands

    $ yarn install
    $ npm run test

    $ node dist/unit_tests/base_url_test.js --brand=orbitz --environment=integration --screenSize=large


Tagging

    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:one"
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:two"  
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:one|tag:two"
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:all" 