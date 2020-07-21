import { expect } from 'chai'; 
import { Brand } from '../../setup/config/brand';
import { baseUrl } from '../../setup/url/base_url'; 

describe("BaseURL", function(){
    it('should construct URL from environment params', function(){
        expect(baseUrl()).to.be.equal("https://expedia.com")
    })
    it('should constrcut URL using brand value from test', function(){
        const orbitz: Brand = "orbitz";
        expect(baseUrl(orbitz)).to.be.equal("https://orbitz.com")
    })
})


