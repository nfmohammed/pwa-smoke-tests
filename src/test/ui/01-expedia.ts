import puppeteer from 'puppeteer';
import { baseUrl } from '../../setup/url/base_url';

let browser
let page

before(async () => {
    browser = await puppeteer.launch({
        //headless: false,

        //set executablePath to locally installed chrome instead of puppeteer bundled chromium
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    })
    page = await browser.newPage()
    page.setUserAgent('user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 tester/nightwatch')
})

describe('Expedia Search', function(){
    it('performs abacus override', async () => {
        await page.goto('https://www.expedia.com/tools/abacus/overrides?abov=-4|1|1', {waitUntil: 'domcontentloaded'});
        // await delay(1000);
        console.log(page.url());
    }).timeout(20000)

    it('goes to homepage and performs search', async () => {
        //await page1.goto('https://www.expedia.com/?pwaLob=wizard-hotel-pwa-v2', {waitUntil: 'domcontentloaded'});
        await page.goto(baseUrl(), {waitUntil: 'domcontentloaded'});
        await delay(1000);
        // await page1.screenshot({path: 'example5.png'});
        console.log(page.url());

        //await page1.type('button[data-stid=location-field-destination-dialog-trigger]', 'Chicago, IL');
        await page.click('input[id=hotel-destination-hp-hotel]', {clickCount: 3});
        await page.type('input[id=hotel-destination-hp-hotel]', 'Chicago, IL');

        await page.click('input[id=hotel-checkin-hp-hotel]', {clickCount: 3});
        await page.type('input[id=hotel-checkin-hp-hotel]', '12/12/2020');

        await page.click('input[id=hotel-checkout-hp-hotel]', {clickCount: 3});
        await page.type('input[id=hotel-checkout-hp-hotel]', '12/14/2020');

        await Promise.all([
            page.click('button[data-gcw-change-submit-text=Search'),
            page.waitForNavigation(),
        ]);
        console.log(page.url());
    }).timeout(20000)
    it ('selects first hotel on SRP and goes to PDP page', async () => {
        await page.waitForSelector('a[data-stid=open-hotel-information]')
        await page.click('a[data-stid=open-hotel-information]')

        await delay(1000);
        let pages = await browser.pages()
        let infosite; //set infosite to most recent tab
        for (const page of pages) {
            infosite = page;
        }

        console.log(infosite.url());


        let infositeTitle = await infosite.title();
        console.log(infositeTitle);

        await browser.close();
    }).timeout(20000)
})

afterEach(function () {
    const title = this.currentTest.title;
    const state = this.currentTest.state;
    if (state === "passed") {
        console.log("PASS......");
    } else if (state === "failed") {
        console.log("FAIL........");
        page.screenshot({path: (new Date()).toString()+".png"});
    }
});

after(async () => {
    await browser.close()
})

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }
