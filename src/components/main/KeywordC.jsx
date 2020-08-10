import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/main/SearchKeywordB';
import KeywordContext from 'context/KeywordContext';
import MentorListContext from 'context/MentorListContext';
import VerticalTabs from 'components/main/VerticalTabs';
import ChipsArray from "components/main/ChipsArray";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const KeywordC = () => {
    const { setKeywordList, checkedKeywordList, setCheckedKeywordList, tempList, setTempList } = useContext(KeywordContext);
    const { setMentorList } = useContext(MentorListContext);

    const searchMentor = async () => {
        console.log(tempList);
        await Api
            .getMentorList({
                keyword: tempList,
            })
            .then((res) => {
                console.log("검색했을떄멘토리스트?", res.data);
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
        const getUserRecommendKeyword = async () => {
            await Api
                .getUserKeyword(12)
                .then((res) => {
                    console.log("애초에 추천받고싶은키어드", res.data.recommendKeyword);

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
                <IconButton onClick={searchMentor}>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default KeywordC;