import { Brand } from "../setup/brand";
import { searchPageUrl } from "../setup/search_page_url";

const searchParams = {
    brand: Brand.ebookers,
    destination: "San Francisco",
    startDate: "2020-12-25",
    endDate: "2020-12-30",
    adults: "2,2", //multi room
    params: ""
}

console.log(searchPageUrl(searchParams));