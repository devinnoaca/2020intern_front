import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile(usn) {
        return axios.get(`/user/inform/${usn}`); 
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
      
    getMatchingList(usn, userType, matchingType){
        console.log(`/user/${userType}/matching/${matchingType}/${usn}`);
        return axios.get(`/user/${userType}/matching/${matchingType}/${usn}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList(data) {
        return axios.post('/main/list',data);
    },

    
};