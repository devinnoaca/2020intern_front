import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get(`/user/inform/1`); 
    },

    editUserProfile(data) {
        return axios.put('/user/inform/1',data); 
    },

    getUserCareer() {
        return axios.get(`/user/career/1`); 
    },

    getUserKeyword(){
        return axios.get(`/user/keyword/1`); 
    },
      
    getMatchingList(userId, userType, matchingType){
        console.log(`/user/${userId}/${userType}/matching/${matchingType}`);
        return axios.get(`/user/${userId}/${userType}/matching/${matchingType}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList(data) {
        return axios.post('/main/list',data);
    },

    
};