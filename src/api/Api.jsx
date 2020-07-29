import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/1/inform');
    },

    getKeyword(){
        return axios.get('/keyword');
    },
};