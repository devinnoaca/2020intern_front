import React, { useEffect, useContext, useState } from 'react';

import Api from 'api/Api';
import KeywordContext from 'context/KeywordContext';
import MyVerticallyCenteredModal1 from 'components/mypage/MyVerticallyCenteredModal1';

import Chip from '@material-ui/core/Chip';

const MyKeywordB = ({ list, setList, where }) => {
    const { setKeywordList, setTempList, setAddKeywordList, setDeleteKeywordList } = useContext(KeywordContext);
    const [modalShow, setModalShow] = useState(false);

    const makeKeyword = () => {
        if (list[0] !== undefined) {
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
        setAddKeywordList([]);
        setDeleteKeywordList([]);
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
                setList={setList}
                backdrop='static'
                where={where}
            />
        </div>
    );
};

export default MyKeywordB;