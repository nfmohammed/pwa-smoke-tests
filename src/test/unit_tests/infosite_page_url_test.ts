import { infositePageUrl } from "../../setup/url/infosite_page_url";
import { Brand } from '../../setup/config/brand';
import { expect } from 'chai'; 

describe("InfositePageURL", function(){
    it('should construct URL from environment params', function() {
        const searchParamsWithoutBrand = {
            propertyId: 20303,
            startDate: "2020-12-25",
            endDate: "2020-12-30",
            params: "rm1=2&rm2=2&x_pwa=1&rfrr=HSR"
        }
        expect(infositePageUrl(searchParamsWithoutBrand)).to.be.equal("https://expedia.com/h20303.Hotel-Information?chkin=2020-12-25&chkout=2020-12-30&rm1=2&rm2=2&x_pwa=1&rfrr=HSR&x_pwa=1&rfrr=HSR");
    })
    
    it('should constrcut URL using brand value from test', function() {
        const brand: Brand = "orbitz";
        const searchParamsWithBrand = {
            brand: brand,
            propertyId: 20303,
            startDate: "2020-12-25",
            endDate: "2020-12-30",
            params: "rm1=2&rm2=2&x_pwa=1&rfrr=HSR"
        }

        expect(infositePageUrl(searchParamsWithBrand)).to.be.equal("https://orbitz.com/h20303.Hotel-Information?chkin=2020-12-25&chkout=2020-12-30&rm1=2&rm2=2&x_pwa=1&rfrr=HSR&x_pwa=1&rfrr=HSR");
    })
})




