import { expect } from 'chai'; 
import { baseUrl } from '../../setup/url/base_url'; 
import { Brand } from '../../setup/config/brand';

describe("tag:one tag:all", function() {
    describe("file:tagging_test", function() {
        describe("BaseURL", function() {
            it('should construct URL from environment params', function() {
                expect(baseUrl()).to.be.equal('https://expedia.com')
            })
        })
    })
})

describe("tag:two tag:all", function() {
    describe("file:tagging_test", function() {
        describe("BaseURL", function() {
            it('should constrcut URL using brand value from test', function() {
                const orbitz: Brand = "orbitz";
                expect(baseUrl(orbitz)).to.be.equal("https://orbitz.com")
            })
        })
    })
})
