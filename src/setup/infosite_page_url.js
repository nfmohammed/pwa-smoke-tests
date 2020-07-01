
import { baseUrl } from '../setup/base_url';

export const infositePageUrl = (props) => {
    return `${baseUrl(props.brand)}/h${props.propertyId}.Hotel-Information?chkin=${props.startDate}&chkout=${props.endDate}&${props.params}&x_pwa=1&rfrr=HSR`;
}

