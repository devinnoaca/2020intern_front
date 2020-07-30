import React, { useContext } from 'react';

import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile } = useContext(UserContext);

    console.log('MyProfileC start');

    const makeCareer = userProfile.career.map((career, index) => {
        return <div key={index}>{career}</div>;
    });

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
