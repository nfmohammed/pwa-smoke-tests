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

Configuration

| Type          | Description   |
|------         |------         |
| environment   |it will be same throughout execution. |
| brand         |default is expedia <br> default can be changed using  `--brand={brandType}`<br> brand can also be changed from within the test |
| screensize    | choices: extraLarge, large, medium, small     |
| width x height    | pending   |
| headless      | pending       |