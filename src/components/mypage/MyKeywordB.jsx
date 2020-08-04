import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import Chip from '@material-ui/core/Chip';
import KeywordB from 'components/main/KeywordB';
import PickedKeywordB from 'components/main/PickedKeywordB';
import KeywordContext from 'context/KeywordContext';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const MyKeywordB = ({ keyword }) => {
    const { setKeywordList, setCheckedKeywordList } = useContext(KeywordContext);

    const [modalShow, setModalShow] = React.useState(false);

    const makeKeyword = () => {
        if (keyword[0] === undefined) {
            return (
                <div></div>
            );
        } else {
            return (
                keyword.map((keyword, index) => {
                    return (
                        <Chip key={index} label={keyword.keywordName} variant="outlined" />
                    );
                })
            );
        }
    };

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" 
            centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        키워드 수정
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KeywordB />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    let funStyle = 'color:blue';
    console.log('%ckeywordC start', funStyle);
    
    useEffect(() => {
        const getKeyword = async () => {
            await Api
                .getKeyword()
                .then((res) => {
                    setKeywordList(res.data.allCategory);
                    console.log("전체 카테고리,키워드 : ", res.data.allCategory);
                    
                });
        };
       
        getKeyword();
        console.log('KeywordC getKeyword useEffect');
    }, [setKeywordList]);

    useEffect(() => {
        const getUserRecommendKeyword = async () => {
            await Api
                .getUserKeyword()
                .then((res) => {
                    setCheckedKeywordList(res.data.recommendKeyword);
                    console.log("유저 추천 키워드 :", res.data.recommendKeyword);
                });
        };

        getUserRecommendKeyword();
        console.log('KeywordC getUserKeyword useEffect');
    }, [setCheckedKeywordList]);

    return (
        <div className="myKeywordBW">
            {makeKeyword()}
            <button className="eidtKeywordButton" onClick={() => setModalShow(true)}>수정</button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default MyKeywordB;