import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getUserProfile() {
        return axios.get('/user/1/inform');
    },

    getKeyword() {
        return axios.get('/keyword');
    },

    getUserKeyword() {
        return axios.get('/user/1/keyword');
    },

    getMentorList() {
        return axios.post('/getMentorList', {
            checkedKeyword: [{
                    keywordId: 1,
                    keywordName: 'java', 
                    catergoryName: 1,
                }, {
                    keywordId: 2, 
                    keywordName: 'java', 
                    catergoryName: 2,
                }, {
                    keywordId: 3, 
                    keywordName: 'java', 
                    catergoryName: 3,
                },]
        })
    }
};