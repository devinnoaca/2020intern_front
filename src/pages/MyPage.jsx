import React, { useContext } from 'react';

import 'style/MyPage.css';

import MyKeywordC from 'components/mypage/MyKeywordC';
import MyProfileC from 'components/mypage/MyProfileC';
import UserContext from 'context/UserContext';

import Cookies from 'js-cookie';

const MyPage = () => {
    const { isLogged } = useContext(UserContext);

    return (
        (Cookies.get('isLogged'))
            ? (
                <div className="myPageW">
                    <MyProfileC></MyProfileC>
                    <MyKeywordC></MyKeywordC>
                </div>
            )

            : (
                <div></div>
            )

    );
};

export default MyPage;