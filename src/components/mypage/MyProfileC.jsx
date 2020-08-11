import React, { useContext, useEffect, useState, useRef } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import UserContext from 'context/UserContext';

const MyProfileC = () => {
    const { userProfile, setUserProfile, userCareer, setUserCareer } = useContext(UserContext);
    const [eidtProfile, setEditProfile] = useState(false);
    const [eidtCareer, setEditCareer] = useState(false);
    const careerRef = useRef()

    const onChangeProfile = (event) => {
        setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
    }

    const onChangeCareer = (event) => {
        userCareer[event.target.name].content = event.target.value;
        if (userCareer[event.target.name].type !== 0) {
            userCareer[event.target.name].type = 1;
        }
        setUserCareer([...userCareer]);
    }

    const changeEditProfileMode = async (event) => {
        if (eidtProfile === false) {
            setEditProfile(true);
        } else {
            event.preventDefault();

            await Api
                .editUserProfile(1, userProfile)
                .then((res) => {
                })

            await Api
                .editUserCareer(1, { career: userCareer })
                .then((res) => {
                })

            setEditProfile(false);
        }
    }

    const makeProfile = () => {
        if (eidtProfile) {
            return (
                <>
                    <p><input onChange={onChangeProfile} name="name" value={userProfile.name} /></p>
                    <p><input onChange={onChangeProfile} name="company" value={userProfile.company} /></p>
                    <p><input onChange={onChangeProfile} name="email" value={userProfile.email} /></p>
                    <p><textarea onChange={onChangeProfile} name="description" value={userProfile.description} /></p>
                </>
            )

        } else {
            return (
                <>
                    <div className="userName">{userProfile.name}</div>
                    <div className="userCompany">{userProfile.company}</div>
                    <div className="userEmail">{userProfile.email}</div>
                    <div className="userDescription">{userProfile.description}</div>
                </>
            )
        }
    }

    const makeCareer = () => {
        if (eidtProfile) {
            let career = userCareer.map((career, index) => {
                return (
                    <p key={index}>
                        <input name={index} value={career.content} onChange={onChangeCareer} />
                        <button onClick={(event) => {
                            setUserCareer([...userCareer])
                        }
                        }>-</button>
                    </p>
                );
            })
            career.push(<p key={career.length}><button onClick={() => {
                userCareer[career.length - 1] = {
                    ID: null,
                    content: '',
                    user_USN: 1,
                    type: 0,
                }
                setUserCareer([...userCareer]);
            }
            }>+</button></p>);

            return (career);

        } else {
            return (
                userCareer.map((career, index) => {
                    return (
                        <div key={index}>{career.content}</div>
                    );
                })
            )
        }
    }

    useEffect(() => {
        const getUserProfile = async () => {
            await Api
                .getUserProfile(1)
                .then((res) => {
                    console.log(res.data);

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
                .getUserCareer(1)
                .then((res) => {
                    console.log(res.data);
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
                {makeProfile()}
            </div>
            <div className="userCareer">
                {makeCareer()}
            </div>
            <p><button onClick={changeEditProfileMode}>프로필 수정</button></p>
        </div>
    );
};

export default MyProfileC;
