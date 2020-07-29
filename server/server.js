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

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});