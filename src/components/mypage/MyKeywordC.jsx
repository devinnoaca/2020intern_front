import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import MyKeywordB from 'components/mypage/MyKeywordB';
import UserKeywordContext from 'context/UserKeywordContext';

const MyKeywordC = () => {
    const { allKeyword, setAllKeyword, recommendKeyword, setrecommendKeyword } = useContext(UserKeywordContext);

    useEffect(() => {
        const getUserKeyword = async () => {
            await Api
                .getUserKeyword(4)
                .then((res) => {
                    setAllKeyword(res.data.allKeyword);
                    setrecommendKeyword(res.data.recommendKeyword);
                });
        };
        getUserKeyword();

    }, [setAllKeyword, setrecommendKeyword]);

    return (
        <div className="myKeywordCW">
            <h1>내가 공부해왔던 모든~키워드</h1>
            <MyKeywordB list={allKeyword} setList={setAllKeyword} where={"total"}></MyKeywordB>
            <h1>내가 현재 추천받고 싶은 키워드</h1>
            <MyKeywordB list={recommendKeyword} setList={setrecommendKeyword} where={"recommend"}></MyKeywordB>
        </div>
    );
};

export default MyKeywordC;