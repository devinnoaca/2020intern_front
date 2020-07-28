import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export default {
    greeting() {
        return axios.get('/api');
    },
};