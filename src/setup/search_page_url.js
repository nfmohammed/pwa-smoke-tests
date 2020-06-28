const baseUrl = require("./base_url");

const searchPageUrl = (props) => {
    return `${baseUrl(props.brand)}/Hotel-Search?destination=${props.destination}&startDate=${props.startDate}&endDate=${props.endDate}&adults=${props.adults}&${props.params}`;
}

module.exports = searchPageUrl;