import React  from 'react';

import 'style/MyPage.css';

import MyKeywordC from 'components/MyKeywordC';
import MyProfileC from 'components/MyProfileC';

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