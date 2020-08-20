import React, { useEffect, useContext, useState } from 'react';

import Api from 'api/Api';
import 'style/MyPage.css'
import KeywordContext from 'context/KeywordContext';
import MyVerticallyCenteredModal1 from 'components/mypage/MyVerticallyCenteredModal1';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const MyKeywordB = ({ list, setList, where }) => {
    const { setKeywordList, setTempList, setAddKeywordList, setDeleteKeywordList } = useContext(KeywordContext);
    const [modalShow, setModalShow] = useState(false);

    const makeKeyword = () => {
        if (list[0] !== undefined) {
            return (
                list.map((keyword, index) => {
                    return (
                        <Chip key={index} label={keyword.keywordName} variant="outlined" style={{margin: "5px"}} />
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
            <div className="myKeywordContent">
            {makeKeyword()}
            </div>
            <Button variant="contained" color="primary" className="editKeywordButton" onClick={editKeyword}>수정</Button>
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