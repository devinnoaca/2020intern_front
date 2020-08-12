import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile(usn) {
        return axios.get(`/user/inform/${usn}`); 
    },

    editUserProfile(usn,data) {
        return axios.put(`/user/inform/${usn}`,data); 
    },

    getUserCareer(usn) {
        return axios.get(`/user/career/${usn}`); 
    },

    editUserCareer(usn, data) {
        console.log(data);
        return axios.post(`/user/career/${usn}`,data); 
    },

    getUserKeyword(usn){
        console.log("먼데",usn);
        
        return axios.get(`/user/keyword/${usn}`); 
    },

    editUserKeyword(where, data, usn) {
        return axios.post(`/user/keyword/${where}/${usn}`,data); 
    },
      
    getMatchingList(usn, userType, matchingType){
        console.log(`/user/${userType}/matching/${matchingType}/${usn}`);
        return axios.get(`/user/${userType}/matching/${matchingType}/${usn}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList(data) {
        console.log("멘토리스트 받으려고 뭐뭐보내는데?",data);
        return axios.post('/main/list',data);
    },

    createMatching(data){
        console.log("매칭생성",data);
        
        return axios.post('/matching',data);
    },

    editMatching(matchingId,data){
        console.log("매칭수정", data);
        console.log(`/matching/${matchingId}`);
        return axios.put(`/matching/${matchingId}`, data);
    }
};