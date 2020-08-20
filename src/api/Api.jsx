import axios from 'axios';

axios.defaults.baseURL = 'http://10.19.247.182:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

export default {
    
    createUser(data) {
        return axios.post('/auth', data);
    },

    login(data) {
        return axios.post('/auth/login', data);
    },

    getUserProfile(usn) {
        return axios.get(`/user/inform/${usn}`);
    },

    editUserProfile(usn, data) {
        return axios.put(`/user/inform/${usn}`, data);
    },

    getUserCareer(usn) {
        return axios.get(`/user/career/${usn}`);
    },

    editUserCareer(usn, data) {
        return axios.post(`/user/career/${usn}`, data);
    },

    getUserKeyword(usn) {
        return axios.get(`/user/keyword/${usn}`);
    },

    editUserKeyword(where, data, usn) {
        console.log("유저키워드 어디다가 저장함?",`/user/keyword/${where}/${usn}`);
        console.log("그밑에",data);
        
        return axios.post(`/user/keyword/${where}/${usn}`, data);
    },

    getMatchingList(usn, userType, matchingType) {
        console.log("이거까지감??");
        
        return axios.get(`/user/${userType}/matching/${matchingType}/${usn}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList(data) {
        console.log("겟멘토리스트api까지잘가냐?",data);
        
        return axios.post('/main/list',data);
    },

    createMatching(data) {
        console.log("매칭생성을 위한",data);
        
        return axios.post('/matching', data);
    },

    editMatching(matchingId, data) {
        return axios.put(`/matching/${matchingId}`, data);
    },

    getNotification(usn){
        console.log("노티피케이션받아오냐?",`/notification/${usn}`);
        return axios.get(`/notification/${usn}`);
    },

    getTotalPage(data) {
        return axios.post('/main/page', data);
    },
};