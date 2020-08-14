import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';
import UserKeywordContext from 'context/UserKeywordContext';
import PaginationContext from 'context/PaginationContext';

import Pagination from 'react-bootstrap/Pagination'


const MentorListC = () => {
    const { setMentorList } = useContext(MentorListContext);
    const { recommendKeyword } = useContext(UserKeywordContext);
    const { totalPageNum, setTotalPageNum, currentPageNum, setCurrentPageNum } = useContext(PaginationContext);

    let items = [];
    for (let number = 1; number <= Number(totalPageNum); number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPageNum} onClick={() => setCurrentPageNum(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    useEffect(() => {
        const getTotalPage = async () => {
            await Api
                .getTotalPage({
                    "keyword": recommendKeyword,
                })
                .then((res) => {
                    console.log("토탈페이지 받아오냐?", res.data);
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
    }, [recommendKeyword, setTotalPageNum])

    useEffect(() => {
        const getMentorList = async () => {
            await Api
                .getMentorList({
                    keyword: recommendKeyword,
                    pageNum: currentPageNum,
                })
                .then((res) => {
                    console.log("띠용치?");
                    
                    setMentorList(res.data.mentorList);
                })
        };

        if (recommendKeyword[0] !== undefined) {
            getMentorList();
        }
    }, [recommendKeyword, setMentorList, currentPageNum]);

    // useEffect(() => {
    //     if (mentorList[0]) {
    //         setTotalPageNum(mentorList[0].totalPage)
    //     };
    // }, [mentorList]);

    return (
        <div className="mentorListCW">
            <div><h1>추천 멘토리스트</h1></div>
            <MentorListB />
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default MentorListC;