import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/1/inform'); 
    },

    getUserCareer() {
        return axios.get('/user/1/career'); 
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getUserKeyword(){
        return axios.get('/user/1/keyword'); 
    },

    getMentorList() {
        return axios.get('/mentorList');
    },

    getWaitMatchingList(){
        return axios.get('/user/1/matching/0');
    },

    getAcceptMatchingList() {
        return axios.get('/user/1/matching/1');
    },

    getRefuseMatchingList() {
        return axios.get('/user/1/matching/2');
    },
};