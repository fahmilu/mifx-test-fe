import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const AddtoChart = () => {
    return (
        <Button style={`bg-yellow-400 hover:bg-yellow-300`}>
            <FontAwesomeIcon icon={faCartArrowDown} /> 
            <div className={'ml-1'}>Add to Cart</div>
        </Button>
    );
}

export default AddtoChart;