import React, { useContext } from 'react';

import Api from 'api/Api';
import KeywordContext from 'context/KeywordContext';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyVerticallyCenteredModal1 = (props) => {
    const { tempList, addKeywordList, deleteKeywordList } = useContext(KeywordContext);
    const { setList, ...rest } = props;

    const saveKeyword = async () => {
        console.log("중복제거전",addKeywordList);
        console.log("중복제거전",deleteKeywordList);
        
        const addKeywordList1 = addKeywordList.filter(val => !deleteKeywordList.includes(val));
        const deleteKeywordList1 = deleteKeywordList.filter(val => !addKeywordList.includes(val));
        console.log("중복제거됬냐?",addKeywordList1);
        console.log("중복제거됬냐?",deleteKeywordList1);
        
        const data = {
            keyword: {
                insertKeywords: addKeywordList1,
                deleteKeywords: deleteKeywordList1,
            }
        }

        props.onHide();
        console.log(data);

        await Api
                .editUserKeyword(props.where, data, 4)
                .then((res) => {
                    console.log("res를받았어 수정시도하고?",res.data);
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