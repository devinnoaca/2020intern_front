import React, { useState } from 'react';
import KeywordContext from 'context/KeywordContext';

const KeywordProvider = ({ children }) => {
    const [keywordList, setKeywordList] = useState([]);
    const keyword = {
        keywordList, setKeywordList
    };

    return (
        <KeywordContext.Provider value={keyword}>
            {children}
        </KeywordContext.Provider>
    )
};

export default KeywordProvider;