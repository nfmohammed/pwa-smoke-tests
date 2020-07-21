#### End2End framework based on puppeteer

Commands

    $ yarn install
    $ yarn run unittests
    $ yarn run uitests
    $ mocha -r ts-node/register src/test/unit_tests/base_url_test.ts
    $ mocha -r ts-node/register src/test/unit_tests/base_url_test.ts --environment=integration


Tagging

    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:one"
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:two"  
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:one|tag:two"
    $ mocha -r ts-node/register src/test/**/*.ts -g "tag:all" 