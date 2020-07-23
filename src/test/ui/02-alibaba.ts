// Require the Puppeteer module and the built-in assert module
import assert from 'assert'
import puppeteer from 'puppeteer'
let browser
let page

// In the Mocha "before" hook, create the browser and page objects.
before(async () => {
  browser = await puppeteer.launch({
    //headless: false,

    //set executablePath to locally installed chrome instead of puppeteer bundled chromium
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  })
  page = await browser.newPage()
    //page.setUserAgent('user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 tester/nightwatch')
})

// Start a test suite with two tests.
describe('Alibaba Search', () => {
  it('has search input', async () => {

    // Set the view port size so we can "see" the whole page
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.alibaba.com', { waitUntil: 'networkidle0' })

    // Assert the search input is there
    const searchInput = await page.$('input.ui-searchbar-keyword')
    assert.ok(searchInput)
  }).timeout(20000)

  it('shows search results after search input', async () => {

    // search for the term "luck cat"
    await page.type('input.ui-searchbar-keyword', 'lucky cat')

    // click the first result and assert it returns something
    await page.click('input.ui-searchbar-submit')
    await page.waitForSelector('[data-content="abox-ProductNormalList"]')
    const firstProduct = await page.$('.J-offer-wrapper')
    assert.ok(firstProduct)
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
