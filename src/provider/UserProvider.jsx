import React, { useState } from 'react';
import UserContext from 'context/UserContext';

const UserProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState({
        usn: '',
        name: '',
        email: '',
        password: '',
        description: '',
        company: '',
    });
    const [userCareer, setuserCareer] = useState([]);

    const user = {
        userProfile, setUserProfile,
        userCareer, setuserCareer
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;