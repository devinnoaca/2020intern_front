import React, { useEffect, useContext, useState } from 'react';

import Api from 'api/Api';
import KeywordContext from 'context/KeywordContext';
import MyVerticallyCenteredModal1 from 'components/mypage/MyVerticallyCenteredModal1';

import Chip from '@material-ui/core/Chip';

const MyKeywordB = ({ list, setList }) => {
    const { setKeywordList, setTempList } = useContext(KeywordContext);
    const [modalShow, setModalShow] = useState(false);

    const makeKeyword = () => {
        if (list[0] === undefined) {
            return (
                <div></div>
            );
        } else {
            return (
                list.map((keyword, index) => {
                    return (
                        <Chip key={index} label={keyword.keywordName} variant="outlined" />
                    );
                })
            );
        }
    };

    const editKeyword = () => {
        setModalShow(true);
        setTempList(list);
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

    return (
        <div className="myKeywordBW">
            {makeKeyword()}
            <button className="eidtKeywordButton" onClick={editKeyword}>수정</button>
            <MyVerticallyCenteredModal1
                show={modalShow}
                onHide={() => setModalShow(false)}
                list={list} setList={setList}
                backdrop='static'
            />
        </div>
    );
};

export default MyKeywordB;