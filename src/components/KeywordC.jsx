import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/SearchKeywordB';
import KeywordB from 'components/KeywordB';
import PickedKeywordB from 'components/PickedKeywordB';
import KeywordContext from 'context/KeywordContext'

const KeywordC = () => {
    const { setKeywordList } = useContext(KeywordContext);
    
    useEffect(() => {
        const getKeyword = async () => {
            await Api
                .getKeyword()
                .then((res) => {
                    setKeywordList(res.data.keywordList);
                });
        };

        getKeyword();
    }, [setKeywordList]);

    return (
        <div className="keyWordCW">
            <SearchKeywordB />
            <KeywordB />
            <PickedKeywordB />
        </div>
    );
};

export default KeywordC;