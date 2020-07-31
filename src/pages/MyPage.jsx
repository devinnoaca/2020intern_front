import React  from 'react';

import 'style/MyPage.css';

import MyKeywordC from 'components/mypage/MyKeywordC';
import MyProfileC from 'components/mypage/MyProfileC';

const MyPage = () => {
    console.log('MyPage start');

    return (
        <div className="myPageW">
            <MyProfileC></MyProfileC>
            <MyKeywordC></MyKeywordC>
            
        </div>
    );
};

export default MyPage;