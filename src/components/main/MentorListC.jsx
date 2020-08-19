import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';
import UserKeywordContext from 'context/UserKeywordContext';
import PaginationContext from 'context/PaginationContext';

import Pagination from 'react-bootstrap/Pagination'

const MentorListC = () => {
    const { mentorList, setMentorList } = useContext(MentorListContext);
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
        setMentorList([]);
    },[])

    useEffect(() => {
        console.log("추천키워드있음?", recommendKeyword);
        if (recommendKeyword.length !== 0) {
            const getTotalPage = async () => {
                await Api
                    .getTotalPage({
                        "keyword": recommendKeyword
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
        }
    }, [recommendKeyword, setTotalPageNum])

    useEffect(() => {
        console.log("멘토리스트띄울떄 추천키워드", recommendKeyword);
        console.log("멘토리스트띄울떄 페이지넘", currentPageNum);

        const getMentorList = async () => {
            await Api
                .getMentorList({
                    keyword: recommendKeyword,
                    pageNum: currentPageNum,
                })
                .then((res) => {
                    console.log("잘불러옴?", res.data);

                    setMentorList(res.data.mentorList);
                })
        };

        if (recommendKeyword[0] !== undefined) {
            getMentorList();
        }
    }, [recommendKeyword, setMentorList, currentPageNum]);

    return (
        <div className="mentorListCW">
            <div><h1>추천 멘토리스트</h1></div>
            {(recommendKeyword.length === 0 )
                ? (
                    <>
                    {(mentorList.length ===0)
                        ? (
                            <>
                                <br />
                                <div><h3>추천받을 키워드가 없습니다. 우측 상단 '내 프로필'에서 추천키워드를 설정해주세요.</h3></div>
                            </>
                        )
                        : (
                            <>
                                <MentorListB />
                                <Pagination>{items}</Pagination>
                            </>
                        )
                    }
                    </>
                )
                : (
                    <>
                        <MentorListB />
                        <Pagination>{items}</Pagination>
                    </>
                )
            }
        </div>
    );
};

export default MentorListC;