import { baseUrl } from './base_url';
import { Brand } from '../config/brand';

type PropTypes = {
    brand?: Brand,
    propertyId: number, 
    startDate?: String, 
    endDate?: String, 
    params?: String
}
export const infositePageUrl = (props: PropTypes) => {
    return `${baseUrl(props.brand)}/h${props.propertyId}.Hotel-Information?chkin=${props.startDate}&chkout=${props.endDate}&${props.params}&x_pwa=1&rfrr=HSR`;
}


