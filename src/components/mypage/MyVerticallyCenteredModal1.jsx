import React, { useContext, useState } from 'react';

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
        const data = {
            keyword: {
                insert_keywords: addKeywordList,
                delete_keywords: deleteKeywordList,
            }
        }

        props.onHide();

        setList(tempList);

        console.log(data);

        await Api
                .editUserKeyword(props.where, data)
                .then((res) => {
                    console.log(res.data);
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