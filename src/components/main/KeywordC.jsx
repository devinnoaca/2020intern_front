import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/main/SearchKeywordB';
import KeywordContext from 'context/KeywordContext';
import VerticalTabs from 'components/main/VerticalTabs';
import ChipsArray from "components/main/ChipsArray"

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const KeywordC = () => {
    const { setKeywordList, checkedKeywordList, setCheckedKeywordList, setTempList } = useContext(KeywordContext);

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

    useEffect(() => {
        setTempList(checkedKeywordList)
    }, [checkedKeywordList, setTempList]);

    return (
        <div className="keywordCW">
            <SearchKeywordB />
            <VerticalTabs list={checkedKeywordList} changeList={setCheckedKeywordList} />
            <div className="row">
                <ChipsArray list={checkedKeywordList} changeList={setCheckedKeywordList} />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default KeywordC;