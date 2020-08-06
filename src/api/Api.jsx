import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile(usn) {
        return axios.get(`/user/inform/${usn}`); 

    editUserProfile(data) {
        return axios.put('/user/inform/1',data); 
    },

    getUserCareer(usn) {
        return axios.get(`/user/career/${usn}`); 
    },

    getUserKeyword(usn){
        return axios.get(`/user/keyword/${usn}`); 
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