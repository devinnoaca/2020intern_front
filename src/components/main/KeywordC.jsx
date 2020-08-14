import React, { useContext, useEffect } from 'react';

import Api from 'api/Api';
import ChipsArray from "components/main/ChipsArray";
import SearchKeywordB from 'components/main/SearchKeywordB';
import VerticalTabs from 'components/main/VerticalTabs';
import MentorListContext from 'context/MentorListContext';
import KeywordContext from 'context/KeywordContext';
import UserKeywordContext from 'context/UserKeywordContext';

import PaginationContext from 'context/PaginationContext';


import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const KeywordC = () => {
    const { recommendKeyword } = useContext(UserKeywordContext);
    const { setKeywordList, tempList, setTempList } = useContext(KeywordContext);
    const { setMentorList } = useContext(MentorListContext);
  
    const { setTotalPageNum } = useContext(PaginationContext);

    useEffect(() => {
        const getTotalPage = async () => {
            await Api
                .getTotalPage({
                    "keyword": tempList,
                })
                .then((res) => {
                    let totalPage = (res.data.totalSearch) / 6;
                    if (totalPage !== undefined) {
                        if (((res.data.totalSearch) % 6) === 0) {
                            setTotalPageNum(totalPage)
                        } else {
                            setTotalPageNum(totalPage + 1)
                        }
                    }
                })
        }
        getTotalPage();
    });

    const searchMentor = async () => {
        await Api
            .getMentorList({
                keyword: tempList,
                pageNum: 1,
            })
            .then((res) => {
                setMentorList(res.data.mentorList);
            });

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