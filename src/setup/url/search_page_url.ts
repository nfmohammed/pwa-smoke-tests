import { baseUrl } from "./base_url";
import { Brand } from '../config/brand';

type PropTypes = {
    brand?: Brand,
    destination: String, 
    startDate: String, 
    endDate: String, 
    adults: String,
    params: String
}

export const searchPageUrl = (props: PropTypes) => {
    return `${baseUrl(props.brand)}/Hotel-Search?destination=${props.destination}&startDate=${props.startDate}&endDate=${props.endDate}&adults=${props.adults}&${props.params}`;
}