import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/inform/1'); 
    },

    editUserProfile(data) {
        return axios.put('/user/inform/1',data); 
    },

    getUserCareer() {
        return axios.get('/user/career/1'); 
    },

    getUserKeyword(){
        return axios.get('/user/keyword/1'); 
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

    getMentorList(data) {
        return axios.post('/main/list',data);
    },

    
};