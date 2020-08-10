import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';
import KeywordContext from 'context/KeywordContext';

import Pagination from '@material-ui/lab/Pagination';

const MentorListC = () => {
    const { setMentorList } = useContext(MentorListContext);
    const { checkedKeywordList } = useContext(KeywordContext)

    useEffect(() => {
        
        const getMentorList = async () => {
            await Api
                .getMentorList({
                    keyword: checkedKeywordList,
                })
                .then((res) => {
                    console.log("이거뭐받아오냐?",res.data);
                    setMentorList(res.data.mentorList);
                })
        };

        if (checkedKeywordList[0] !== undefined) {
            getMentorList({
                keyword: checkedKeywordList
            });
        }
    }, [checkedKeywordList, setMentorList]);

    return (
        <div className="mentorListCW">
            <div><h1>추천 멘토리스트</h1></div>
            <MentorListB />
            <Pagination count={10} size="large" className="mentorBPagination" />
        </div>
    );
};

export default MentorListC;