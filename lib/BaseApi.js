import Axios from 'axios';

/* setup base axios entity */
export default Axios.create({
    baseURL: process.env.API_BASE_URL,
});