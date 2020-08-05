import React  from 'react';

import 'style/MyPage.css';

import MyKeywordC from 'components/mypage/MyKeywordC';
import MyProfileC from 'components/mypage/MyProfileC';

const MyPage = () => {
    return (
        <div className="myPageW">
            <MyProfileC></MyProfileC>
            <MyKeywordC></MyKeywordC>
            
        </div>
    );
};

export default MyPage;