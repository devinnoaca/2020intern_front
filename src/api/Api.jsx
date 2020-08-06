import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile(usn) {
        return axios.get(`/user/${usn}/inform`); 
    },

    putUserProfile(data) {
        console.log(data);
        return axios.put('/user/1/inform',data); 
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

    getMentorList() {
        return axios.get('/mentorList');
    },

    
};