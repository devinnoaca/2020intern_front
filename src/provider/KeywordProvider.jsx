import React, { useState } from 'react';
import KeywordContext from 'context/KeywordContext';

const KeywordProvider = ({ children }) => {
    const [keywordList, setKeywordList] = useState([]);
    
    const [tempList, setTempList] = useState([]);

    const [addKeywordList, setAddKeywordList] = useState([]);
    const [deleteKeywordList, setDeleteKeywordList] = useState([]);

    const keyword = {
        keywordList, setKeywordList, 
        tempList, setTempList,
        addKeywordList, setAddKeywordList,
        deleteKeywordList, setDeleteKeywordList,
    };

    return (
        <KeywordContext.Provider value={keyword}>
            {children}
        </KeywordContext.Provider>
    )
};

export default KeywordProvider;