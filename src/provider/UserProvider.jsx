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
        type: '',
    });
    const [userCareer, setUserCareer] = useState([]);

    const user = {
        userProfile, setUserProfile,
        userCareer, setUserCareer
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;