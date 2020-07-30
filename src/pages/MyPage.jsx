import React, { useEffect, useContext } from 'react';

import 'style/MyPage.css';
import Api from 'api/Api';
import UserContext from 'context/UserContext';
import MyKeywordC from 'components/MyKeywordC';
import MyProfileC from 'components/MyProfileC';

const MyPage = () => {
    const { setUserProfile } = useContext(UserContext);

    console.log('MyPage start');

    useEffect(() => {
        console.log('MyPage useEffect');
        const getUserProfile = async () => {
            await Api
                .getUserProfile()
                .then((res) => {
                    setUserProfile({
                        usn: res.data.usn,
                        name: res.data.name,
                        email: res.data.email,
                        password: res.data.password,
                        description: res.data.description,
                        company: res.data.company,
                        career: res.data.career,
                    });
                });
        };

        getUserProfile();

    }, [setUserProfile]);
    
    return (
        <div className="myPageW">
            <MyProfileC></MyProfileC>
            <MyKeywordC></MyKeywordC>
        </div>
    );
};

export default MyPage;