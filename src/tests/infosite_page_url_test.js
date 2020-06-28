const { brand } = require("../../setup/brand");
const infositePageUrl = require("../../setup/infosite_page_url");

const searchParams = {
    propertyId: 20303,
    startDate: "2020-12-25",
    endDate: "2020-12-30",
    params: "rm1=2&rm2=2&x_pwa=1&rfrr=HSR"
}

console.log(infositePageUrl(searchParams));