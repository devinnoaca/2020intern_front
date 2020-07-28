import React, { useState } from 'react';
import UserContext from 'context/UserContext';

const UserProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState({
        usn: 0,
        name: '',
        email: '',
        password: '',
        description: '',
        company: '',
    });

    const user = {
        userProfile, setUserProfile
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;