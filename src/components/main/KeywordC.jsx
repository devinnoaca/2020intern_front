import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/main/SearchKeywordB';
import VerticalTabs from 'components/main/VerticalTabs';
import ChipsArray from "components/main/ChipsArray";
import UserKeywordContext from 'context/UserKeywordContext';
import KeywordContext from 'context/KeywordContext';
import MentorListContext from 'context/MentorListContext';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const KeywordC = () => {
    const { recommendKeyword } = useContext(UserKeywordContext);
    const { setKeywordList, tempList, setTempList } = useContext(KeywordContext);
    const { setMentorList } = useContext(MentorListContext);
    
    const searchMentor = async () => {
            await Api
                .getMentorList({
                    keyword: tempList,
                    pageNum:1,
                })
                .then((res) => {
                    setMentorList(res.data.mentorList);
                })
        };

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
        setTempList(recommendKeyword)
    }, [recommendKeyword, setTempList]);

    return (
        <div className="keywordCW">
            <SearchKeywordB />
            <VerticalTabs />
            <div><h3>멘토를 검색할 키워드(위에서 원하는 키워드를 클릭하세요!!)</h3></div>
            <div className="row">
                <ChipsArray />
                <IconButton onClick={searchMentor}>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default KeywordC;