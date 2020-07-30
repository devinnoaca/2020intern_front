import React, { useContext, useEffect } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile, setUserProfile } = useContext(UserContext);

    console.log('MyProfileC start');

    const makeCareer = userProfile.career.map((career, index) => {
        return <div key={index}>{career}</div>;
    });

    useEffect(() => {
        console.log('MyProfileC useEffect');
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
        <div className="myProfileCW">
            <div className="userImage">
                <img src={image} alt="" />
            </div>
            <div className="userProfile">
                <div>{userProfile.name}</div>
                <div>{userProfile.company}</div>
                <div>{userProfile.email}</div>
                <div>{userProfile.description}</div>
            </div>
            <div className="userCareer">
                {makeCareer}
            </div>
        </div>
    );
};

export default MyProfileC;
