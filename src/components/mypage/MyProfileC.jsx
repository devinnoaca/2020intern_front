import React, { useContext, useEffect, useState } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile, setUserProfile, userCareer, setUserCareer } = useContext(UserContext);
    const [eidtProfile, setEditProfile] = useState(false);
    const [eidtCareer, setEditCareer] = useState(false);

    console.log('MyProfileC start');

    const onChangeProfile = (event) => {
        setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
    }

    const onChangeCareer = (event) => {
        userCareer[event.target.name] = event.target.value;
        setUserCareer([...userCareer]);
        console.log(userCareer);
    }

    const changeEditProfileMode = (event) => {
        if (eidtProfile === false) {
            setEditProfile(true);
        } else {
            event.preventDefault();
            setEditProfile(false);
        }
    }

    const changeEditCareerMode = (event) => {
        if (eidtCareer === false) {
            setEditCareer(true);
        } else {
            event.preventDefault();
            setEditCareer(false);
        }
    }

    const make = userCareer.map((career, index) => {
        return (
             <div key={index}>{career}</div>
        );
    })

    useEffect(() => {
        console.log('getUserProfile useEffect');
        const getUserProfile = async () => {
            await Api
                .getUserProfile()
                .then((res) => {
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
        };

        getUserProfile();
    }, [setUserProfile]);

    useEffect(() => {
        console.log('getUserCareer useEffect');
        const getUserCareer = async () => {
            await Api
                .getUserCareer()
                .then((res) => {
                    setUserCareer(res.data.career)
                });
        };

        getUserCareer();
    }, [setUserCareer]);

    return (
        <div className="myProfileCW">
            <div className="userImage">
                <img src={image} alt="" />
            </div>
            <div className="userProfile">
                {(eidtProfile)
                    ? (
                        <>
                            <p><input onChange={onChangeProfile} name="name" value={userProfile.name} /></p>
                            <p><input onChange={onChangeProfile} name="company" value={userProfile.company} /></p>
                            <p><input onChange={onChangeProfile} name="email" value={userProfile.email} /></p>
                            <p><textarea onChange={onChangeProfile} name="description" value={userProfile.description} /></p>
                        </>
                    )
                    : (
                        <>
                            <div>{userProfile.name}</div>
                            <div>{userProfile.company}</div>
                            <div>{userProfile.email}</div>
                            <div>{userProfile.description}</div>
                        </>
                    )
                }
                <button onClick={changeEditProfileMode}>프로필 수정</button>
            </div>
            <div className="userCareer">
                {
                    (eidtCareer)
                        ? ( 
                            userCareer.map((career, index) => {
                                return (   
                                    <p key={index}>
                                        <input name={index} value={career} onChange={onChangeCareer} />
                                        <button>-</button>
                                    </p>
                                );
                            }) 
                        )
                        : (
                            userCareer.map((career, index) => {
                                return (
                                    <div key={index}>{career}</div>
                                );
                            })
                         )
                }
                <button>+</button>
                <button onClick={changeEditCareerMode}>경력 수정</button>
            </div>
        </div>
    );
};

export default MyProfileC;
