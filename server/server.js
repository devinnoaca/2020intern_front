const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/user/1/inform', (req, res) => {
    res.json({
        USN: 1,
        userName: '이지훈',
        email: 'wlgnssla311@gmail.com',
        password: 'jihun311',
        description: '국민대학교 4학년 이지훈입니다.',
        company: '국민대학교',
    });
});

app.use('/mentorList', (req, res) => {
    res.json({
        mentorList: [
            {
                usn: 1,
                name: '이지훈',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
            {
                usn: 2,
                name: '박종민',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
            {
                usn: 3,
                name: '송성재',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
            {
                usn: 4,
                name: '이인평',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
            {
                usn: 5,
                name: '이정현',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
            {
                usn: 6,
                name: '이진구',
                imageUrl: 'asdfasdf',
                email: 'wlgnssla311@gmail.com',
                password: 'jihun311',
                description: '국민대학교 4학년 이지훈입니다.',
                company: '국민대학교',
                career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
            },
        ],
    });
});

app.use('/user/1/keyword', (req, res) => {
    res.json({
        usn: 1,
        allKeyword: [
            {
                keywordId: 1,
                keywordName: 'a',
                categoryName: '개발/프로그래밍',
            },
            {
                keywordId: 2,
                keywordName: 'b',
                categoryName: '디자인',
            },
            {
                keywordId: 3,
                keywordName: 'c',
                categoryName: '데이터',
            },
        ],
        recommendKeyword: [
            {
                keywordId: 1,
                keywordName: 'qwe',
                categoryName: '업무 스킬',
            },
            {
                keywordId: 2,
                keywordName: 'asd',
                categoryName: '업무 스킬',
            },
            {
                keywordId: 3,
                keywordName: 'zxcs',
                categoryName: '업무 스킬',
            },
        ],
    });
});

app.use('/user/1/career', (req, res) => {
    res.json({
        usn: 1,
        career: ['log분석기 개발', '육군 만기 전역', '솔로 9개월차'],
    });
});

app.use('/user/1/matching/1', (req, res) => {
    res.json({
        acceptMatchingList: [
            {
                matchingId: 1,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: '2019-2-3 19:00',
                state: 1,
                req_reason: 'hubuh',
                reject_message: null,
                isChecked: true,
                keywordList:[
                    {
                        matchingId: 1,
                        keywordName: 'java',
                        categortName: '개발',                
                    },
                    {
                        matchingId: 1,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 1,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },

                ]
            },
            {
                matchingId: 3,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: '2019-2-3 19:00',
                state: 1,
                req_reason: 'asdfasdf',
                reject_message: null,
                isChecked: true,
                keywordList: [
                    {
                        matchingId: 3,
                        keywordName: 'java',
                        categortName: '개발',
                    },
                    {
                        matchingId: 3,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 3,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },

                ]
            },
        ],
    });
});

app.use('/user/1/matching/2', (req, res) => {
    res.json({
        refuseMatchingList: [
            {
                matchingId: 2,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: '2019-2-3 19:00',
                state: 2,
                req_reason: 'asdfasdf',
                reject_message: 'asdfasdf',
                isChecked: true,
                keywordList: [
                    {
                        matchingId: 2,
                        keywordName: 'java',
                        categortName: '개발',
                    },
                    {
                        matchingId: 2,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 2,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },
                ]
            },
            {
                matchingId: 4,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: '2019-2-3 19:00',
                state: 2,
                req_reason: 'asdf',
                reject_message: 'adsfasdf',
                isChecked: true,
                keywordList: [
                    {
                        matchingId: 4,
                        keywordName: 'java',
                        categortName: '개발',
                    },
                    {
                        matchingId: 4,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 4,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },
                ]
            },
        ],
    });
});

app.use('/user/1/matching/0', (req, res) => {
    res.json({
        refuseMatchingList: [
            {
                matchingId: 2,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: null,
                state: 0,
                req_reason: 'asdfasdf',
                reject_message: '',
                isChecked: true,
                keywordList: [
                    {
                        matchingId: 2,
                        keywordName: 'java',
                        categortName: '개발',
                    },
                    {
                        matchingId: 2,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 2,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },
                ]
            },
            {
                matchingId: 4,
                mentor_USN: 1,
                mentee_USN: 2,
                time_req: '2019-2-3 19:00',
                time_res: null,
                state: 0,
                req_reason: 'asdfasdf',
                reject_message: '',
                isChecked: true,
                keywordList: [
                    {
                        matchingId: 4,
                        keywordName: 'java',
                        categortName: '개발',
                    },
                    {
                        matchingId: 4,
                        keywordName: 'javascript',
                        categortName: '개발',
                    },
                    {
                        matchingId: 4,
                        keywordName: 'mysql',
                        categortName: '데이터베이스',
                    },
                ]
            },
        ],
    });
});

app.use('/main/keyword', (req, res) => {
    res.json({
        allCategory: [
            {
                categoryId: 1,
                categoryName: '개발/프로그래밍',
                keywordList: [
                    {
                        keywordId: 1,
                        keywordName: 'java',
                        categoryName: '개발/프로그래밍',
                    }, {
                        keywordId: 2,
                        keywordName: 'javascript',
                        categoryName: '개발/프로그래밍',
                    }, {
                        keywordId: 3,
                        keywordName: 'javascript',
                        categoryName: '개발/프로그래밍',
                    },
                ],
            },
            {
                categoryId: 2,
                categoryName: '디자인',
                keywordList: [
                    {
                        keywordId: 4,
                        keywordName: 'HTML',
                        categoryName: '디자인',
                    }, {
                        keywordId: 5,
                        keywordName: 'CSS',
                        categoryName: '디자인',
                    }, {
                        keywordId: 6,
                        keywordName: 'javascript',
                        categoryName: '디자인',
                    },
                ],
            },
            {
                categoryId: 3,
                categoryName: '데이터 사이언스',
                keywordList: [
                    {
                        keywordId: 7,
                        keywordName: 'python',
                        categoryName: '데이터 사이언스',
                    }, {
                        keywordId: 8,
                        keywordName: 'mysql',
                        categoryName: '데이터 사이언스',
                    }, {
                        keywordId: 9,
                        keywordName: 'oracle',
                        categoryName: '데이터 사이언스',
                    },
                ],
            },
            {
                categoryId: 4,
                categoryName: '업무 스킬',
                keywordList: [
                    {
                        keywordId: 10,
                        keywordName: 'java',
                        categoryName: '업무 스킬',
                    }, {
                        keywordId: 11,
                        keywordName: 'javascript',
                        categoryName: '업무 스킬',
                    }, {
                        keywordId: 12,
                        keywordName: 'python',
                        categoryName: '업무 스킬',
                    },
                ]
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});