
const baseUrl = require("./base_url");

const infositePageUrl = (props) => {
    return `${baseUrl(props.brand)}/h${props.propertyId}.Hotel-Information?chkin=${props.startDate}&chkout=${props.endDate}&${props.params}&x_pwa=1&rfrr=HSR`;
}

module.exports = infositePageUrl;