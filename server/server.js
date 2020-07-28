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
    });
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});