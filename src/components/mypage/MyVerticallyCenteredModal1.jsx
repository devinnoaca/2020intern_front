import React, { useContext } from 'react';

import Api from 'api/Api';
import KeywordContext from 'context/KeywordContext';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';
import UserContext from 'context/UserContext';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyVerticallyCenteredModal1 = (props) => {
    const { userProfile } = useContext(UserContext);
    const { tempList, addKeywordList, deleteKeywordList } = useContext(KeywordContext);
    const { setList, ...rest } = props;

    const saveKeyword = async () => {
        const addKeywordList1 = addKeywordList.filter(val => !deleteKeywordList.includes(val));
        const deleteKeywordList1 = deleteKeywordList.filter(val => !addKeywordList.includes(val));

        const data = {
            keyword: {
                insertKeywords: addKeywordList1,
                deleteKeywords: deleteKeywordList1,
            }
        }

        props.onHide();

        await Api
            .editUserKeyword(props.where, data, userProfile.usn)
                .then((res) => {
                    setList(tempList);
                })
    }

    return (
        <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    키워드 수정
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalTabs />
                <ChipsArray />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveKeyword}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal1;