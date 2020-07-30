import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/SearchKeywordB';
import KeywordB from 'components/KeywordB';
import PickedKeywordB from 'components/PickedKeywordB';
import KeywordContext from 'context/KeywordContext';

const KeywordC = () => {
    const { setKeywordList, setCheckedKeywordList, checkedKeywordList } = useContext(KeywordContext);

    let funStyle = 'color:blue';
    console.log('%ckeywordC start', funStyle);
    
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

    useEffect(() => {
        const getUserKeyword = async () => {
            await Api
                .getUserKeyword()
                .then((res) => {
                    setCheckedKeywordList(res.data.recommendkeyword);
                });
        };

        getUserKeyword();
    }, [setCheckedKeywordList]);
    console.log("키워드컨테이너에서 바뀌었는지"+checkedKeywordList);
    

    
    

    return (
        <div className="keyWordCW">
            <SearchKeywordB />
            <KeywordB />
            <PickedKeywordB />
        </div>
    );
};

export default KeywordC;