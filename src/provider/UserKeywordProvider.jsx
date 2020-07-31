import React, { useState } from 'react';
import UserKeywordContext from 'context/UserKeywordContext';

const UserKeywordProvider = ({ children }) => {
    const [allKeyword, setAllKeyword] = useState([]);
    const [recommendKeyword, setrecommendKeyword] = useState([]);

    const userKeyword = {
        allKeyword, setAllKeyword, 
        recommendKeyword, setrecommendKeyword
    };

    return (
        <UserKeywordContext.Provider value={userKeyword}>
            {children}
        </UserKeywordContext.Provider>
    )
};

export default UserKeywordProvider;