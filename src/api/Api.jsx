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

    getUserKeyword(){
        return axios.get('/user/1/keyword'); 
    },

    getWaitMatchingList(){
        return axios.get('/user/2/1/matching/0');
    },

    getAcceptMatchingList() {
        return axios.get('/user/2/1/matching/1');
    },

    getRefuseMatchingList() {
        return axios.get('/user/2/1/matching/2');
    },    

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList() {
        return axios.get('/mentorList');
    },

    
};