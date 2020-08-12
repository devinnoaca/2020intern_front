import React, { useEffect, useContext } from 'react';
import { useState } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';
import UserKeywordContext from 'context/UserKeywordContext';

import Pagination from 'react-bootstrap/Pagination'


const MentorListC = () => {
    const { mentorList, setMentorList } = useContext(MentorListContext);
    const { recommendKeyword } = useContext(UserKeywordContext)
    const [totalPageNum, setTotalPageNum] = useState('');
    const [currentPageNum, setCurrentPageNum] = useState(1);

    let items = [];
    for (let number = 1; number <= Number(totalPageNum); number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPageNum} onClick={() => setCurrentPageNum(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    console.log(recommendKeyword);

    useEffect(() => {
        const getMentorList = async () => {
            await Api
                .getMentorList({
                    keyword: recommendKeyword,
                    pageNum: currentPageNum,
                })
                .then((res) => {
                    setMentorList(res.data.mentorList);
                })
        };

        if (recommendKeyword[0] !== undefined) {
            getMentorList();
        }
    }, [recommendKeyword, setMentorList, currentPageNum]);

    useEffect(() => {
        if (mentorList[0]) {
            setTotalPageNum(mentorList[0].totalPage)
        };
    }, [mentorList]);

    return (
        <div className="mentorListCW">
            <div><h1>추천 멘토리스트</h1></div>
            <MentorListB />
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default MentorListC;