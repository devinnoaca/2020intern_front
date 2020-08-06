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

    useEffect(() => {
        const getKeyword = async () => {
            await Api
                .getKeyword()
                .then((res) => {
                    setKeywordList(res.data.allCategory);
                });
        };

        getKeyword();
    }, [setKeywordList]);

    useEffect(() => {
        const getUserRecommendKeyword = async () => {
            await Api
                .getUserKeyword(1)
                .then((res) => {
                    setCheckedKeywordList(res.data.recommendKeyword);
                });
        };

        getUserRecommendKeyword();
    }, [setCheckedKeywordList]);

    useEffect(() => {
        setTempList(checkedKeywordList)
    }, [checkedKeywordList, setTempList]);

    return (
        <div className="keywordCW">
            <SearchKeywordB />
            <VerticalTabs />
            <div className="row">
                <ChipsArray />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default KeywordC;