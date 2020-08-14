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
        return axios.post(`/user/keyword/${where}/${usn}`, data);
    },

    getMatchingList(usn, userType, matchingType) {
        return axios.get(`/user/${userType}/matching/${matchingType}/${usn}`);
    },

    getKeyword() {
        return axios.get('/main/keyword');
    },

    getMentorList(data) {
        return axios.post('/main/list',data);
    },

    createMatching(data) {
        return axios.post('/matching', data);
    },

    editMatching(matchingId, data) {
        return axios.put(`/matching/${matchingId}`, data);
    },

    getNotification(usn){
        return axios.get(`/notification/${usn}`);
    },

    getTotalPage(data) {
        return axios.post('/main/page', data);
    },
};