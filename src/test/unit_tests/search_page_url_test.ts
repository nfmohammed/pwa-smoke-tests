import { Brand } from "../../setup/config/brand";
import { searchPageUrl } from "../../setup/url/search_page_url";
import { expect } from 'chai'; 

describe("SearchPageURL", function(){
    it('should construct URL from environment params', function() {
        const searchParamsWithoutBrand = {
            destination: "San Francisco",
            startDate: "2020-12-25",
            endDate: "2020-12-30",
            adults: "2,2", //multi room
            params: ""
        }
        expect(searchPageUrl(searchParamsWithoutBrand)).to.be.equal("https://expedia.com/Hotel-Search?destination=San Francisco&startDate=2020-12-25&endDate=2020-12-30&adults=2,2&");
    })
    
    it('should constrcut URL using brand value from test', function() {
        const ebookers: Brand = "ebookers";
        const searchParams = {
            brand: ebookers,
            destination: "San Francisco",
            startDate: "2020-12-25",
            endDate: "2020-12-30",
            adults: "2,2", //multi room
            params: ""
        }

        expect(searchPageUrl(searchParams)).to.be.equal("https://ebookers.com/Hotel-Search?destination=San Francisco&startDate=2020-12-25&endDate=2020-12-30&adults=2,2&");
    })
})