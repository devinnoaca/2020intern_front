const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/user/1/inform', (req, res) => {
    res.json({
        usn: 1,
        name: '이지훈',
        email: 'wlgnssla311@gmail.com',
        password: 'jihun311',
        description: '국민대학교 4학년 이지훈입니다.',
        company: '국민대학교',
        career : [
            '크래프톤 CD (現)',
            '넷마블엔투 PD (前)',
            '플레로 게임즈 PD (前)',
        ],
    });
});

app.use('/keyword', (req, res) => {
    res.json({
        keywordList: [
            {
                category: '개발',
                keyword: ['java_개발', 'javascript_개발', 'python_개발']
            },
            {
                category: '디자인',
                keyword: ['html_디자인', 'CSS_디자인', 'SCSS_디자인']
            },
            {
                category: '데이터사이언스',
                keyword: ['MongoDB_데이터사이언스', 'MySQL_데이터사이언스', 'MariaDB_데이터사이언스', 'SQL_데이터사이언스', 'RDBMS_데이터사이언스', 'Oracle_데이터사이언스', 'R_데이터사이언스']
            },
            {
                category: '업무스킬',
                keyword: ['프로젝트관리_업무스킬', '데이터분석_업무스킬', '정보보안_업무스킬', 'VBA_업무스킬']
            },
        ],
    });
});



app.listen(port, () => {
    console.log(`express is running on ${port}`);
});