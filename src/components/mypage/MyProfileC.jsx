import React, { useContext, useEffect, useState } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile, setUserProfile, userCareer, setuserCareer } = useContext(UserContext);
    const [eidtProfile, setEditProfile] = useState(false);
    const [eidtCareer, setEditCareer] = useState(false);

    console.log('MyProfileC start');

    const makeCareer = userCareer.map((career, index) => {
        return <div key={index}>{career}</div>;
    });

    // const onEditProfile = (event) => {
    //     setUserProfile({...userProfile, event.target.name: event.target.value});
    // }

    useEffect(() => {
        console.log('MyProfileC useEffect');
        const getUserProfile = async () => {
            await Api
                .getUserProfile()
                .then((res) => {
                    console.log(res.data);
                    setUserProfile({
                        usn: res.data.USN,
                        id: res.data.ID,
                        name: res.data.userName,
                        email: res.data.email,
                        password: res.data.password,
                        description: res.data.description,
                        company: res.data.company,
                    });
                });

            await Api
                .getUserCareer()
                .then((res) => {
                    setuserCareer(res.data.career)
                });
        };

        getUserProfile();

    }, [setUserProfile, setuserCareer]);

    return (
        <div className="myProfileCW">
            {(eidtProfile)
                ? (
                    <>
                        <div className="userImage">
                            <img src={image} alt="" />
                        </div>
                        <div className="userProfile">
                            <p><input name="name" value={userProfile.name} /></p>
                            <p><input onChange={() => { }} name="company" value={userProfile.company} /></p>
                            <div>{userProfile.email}</div>
                            <div>{userProfile.description}</div>
                            <button>프로필 수정</button>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="userImage">
                            <img src={image} alt="" />
                        </div>
                        <div className="userProfile">
                            <div>{userProfile.name}</div>
                            <div>{userProfile.company}</div>
                            <div>{userProfile.email}</div>
                            <div>{userProfile.description}</div>
                            <button>프로필 수정</button>
                        </div>
                    </>
                )
            }

            <div className="userCareer">
                {makeCareer}
                <button>경력 수정</button>
            </div>
        </div>
    );
};

export default MyProfileC;
