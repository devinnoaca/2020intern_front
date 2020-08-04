import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/main/SearchKeywordB';
import KeywordB from 'components/main/KeywordB';
import PickedKeywordB from 'components/main/PickedKeywordB';
import KeywordContext from 'context/KeywordContext';

const KeywordC = () => {
    const { setKeywordList, setCheckedKeywordList } = useContext(KeywordContext);

    let funStyle = 'color:blue';
    console.log('%ckeywordC start', funStyle);
    
    useEffect(() => {
        const getKeyword = async () => {
            await Api
                .getKeyword()
                .then((res) => {
                    setKeywordList(res.data.allCategory);
                    console.log("전체 카테고리,키워드 : ", res.data.allCategory);
                    
                });
        };
       
        getKeyword();
        console.log('KeywordC getKeyword useEffect');
    }, [setKeywordList]);

    useEffect(() => {
        const getUserRecommendKeyword = async () => {
            await Api
                .getUserKeyword()
                .then((res) => {
                    setCheckedKeywordList(res.data.recommendKeyword);
                    console.log("유저 추천 키워드 :", res.data.recommendKeyword);
                });
        };

        getUserRecommendKeyword();
        console.log('KeywordC getUserKeyword useEffect');
    }, [setCheckedKeywordList]);

    return (
        <div className="keyWordCW">
            <SearchKeywordB />
            <KeywordB />
            <PickedKeywordB />
        </div>
    );
};

export default KeywordC;