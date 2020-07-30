import axios from 'axios';

//axios.defaults.baseURL = 'http://10.19.247.182:3001';
axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/1/inform'); 
    },

    getUserCareer() {
        return axios.get('/user/1/career'); 
    },

    getKeyword(){
        return axios.get('/keyword');
    },

    getUserKeyword(){
        return axios.get('/user/1/keyword'); 
    },
};