import { baseUrl } from "./base_url";

export const searchPageUrl = (props) => {
    return `${baseUrl(props.brand)}/Hotel-Search?destination=${props.destination}&startDate=${props.startDate}&endDate=${props.endDate}&adults=${props.adults}&${props.params}`;
}