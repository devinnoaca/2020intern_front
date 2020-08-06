import React, { useContext, useEffect, useState } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile, setUserProfile, userCareer, setUserCareer } = useContext(UserContext);
    const [eidtProfile, setEditProfile] = useState(false);
    const [eidtCareer, setEditCareer] = useState(false);

    const onChangeProfile = (event) => {
        setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
    }

    const onChangeCareer = (event) => {
        userCareer[event.target.name].content = event.target.value;
        setUserCareer([...userCareer]);
    }

    const changeEditProfileMode = async (event) => {
        if (eidtProfile === false) {
            setEditProfile(true);
        } else {
            event.preventDefault();
            
            await Api
                .editUserProfile(userProfile)
                .then((res) => {
                })

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
    
    useEffect(() => {
        const getUserProfile = async () => {
            await Api
                .getUserProfile()
                .then((res) => {
                    setUserProfile({
                        usn: res.data.USN,
                        id: res.data.ID,
                        name: res.data.name,
                        email: res.data.email,
                        description: res.data.description,
                        company: res.data.company,
                        type: res.data.type,
                    });
                });
        };

        getUserProfile();
    }, [setUserProfile]);

    useEffect(() => {
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
                            <div className="userName">{userProfile.name}</div>
                            <div className="userCompany">{userProfile.company}</div>
                            <div className="userEmail">{userProfile.email}</div>
                            <div className="userDescription">{userProfile.description}</div>
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
                                        <input name={index} value={career.content} onChange={onChangeCareer} />
                                        <button>-</button>
                                    </p>
                                );
                            }) 
                        )
                        : (
                            userCareer.map((career, index) => {
                                return (
                                    <div key={index}>{career.content}</div>
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
