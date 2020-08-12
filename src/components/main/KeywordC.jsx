import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import SearchKeywordB from 'components/main/SearchKeywordB';
import KeywordContext from 'context/KeywordContext';
import MentorListContext from 'context/MentorListContext';
import VerticalTabs from 'components/main/VerticalTabs';
import ChipsArray from "components/main/ChipsArray";
import UserContext from 'context/UserContext';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const KeywordC = () => {
    const { setKeywordList, checkedKeywordList, setCheckedKeywordList, tempList, setTempList } = useContext(KeywordContext);
    const { setMentorList } = useContext(MentorListContext);
    const { userProfile } = useContext(UserContext);

    const searchMentor = async () => {
            await Api
                .getMentorList({
                    keyword: tempList,
                    pageNum:1,
                })
                .then((res) => {
                    console.log("검색해서 나온멘토리스트",res.data.mentorList);
                    
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
                .getUserKeyword(userProfile.usn)
                .then((res) => {
                    console.log("애초에 추천받고싶은키어드", res.data.recommendKeyword);

                    setCheckedKeywordList(res.data.recommendKeyword);
                });
        };

        getUserRecommendKeyword();
    }, [setCheckedKeywordList, userProfile.usn]);

    useEffect(() => {
        setTempList(checkedKeywordList)
    }, [checkedKeywordList, setTempList]);

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