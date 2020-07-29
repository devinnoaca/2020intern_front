import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import UserContext from 'context/UserContext';

const MyPage = () => {
    const { userProfile, setUserProfile } = useContext(UserContext);

    console.log(userProfile);

    useEffect(() => {
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
                    });
                });
        };

        getUserProfile();
        
    }, [setUserProfile]);
    
    return (
        <>
        </>
    )
}

export default MyPage;