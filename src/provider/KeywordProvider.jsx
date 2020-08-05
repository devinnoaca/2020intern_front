import React, { useState } from 'react';
import KeywordContext from 'context/KeywordContext';

const KeywordProvider = ({ children }) => {
    const [keywordList, setKeywordList] = useState([]);
    const [checkedKeywordList, setCheckedKeywordList] = useState([]);
    const [tempList, setTempList] = useState([]);

    const keyword = {
        keywordList, setKeywordList, 
        checkedKeywordList, setCheckedKeywordList,
        tempList, setTempList,
    };

    return (
        <KeywordContext.Provider value={keyword}>
            {children}
        </KeywordContext.Provider>
    )
};

export default KeywordProvider;