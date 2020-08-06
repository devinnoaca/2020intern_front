import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/1/inform'); 
    },

    putUserProfile(data) {
        console.log(data);
        return axios.put('/user/1/inform',data); 
    },

    getUserCareer() {
        return axios.get('/user/1/career'); 
    },

    getUserKeyword(){
        return axios.get('/user/1/keyword'); 
    },

    getMatchingList(userId, userType, matchingType){
        return axios.get(`/user${userId}/${userType}/matching/${matchingType}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList() {
        return axios.get('/mentorList');
    },

    
};