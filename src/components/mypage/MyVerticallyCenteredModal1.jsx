import React, { useContext } from 'react';

import KeywordContext from 'context/KeywordContext';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyVerticallyCenteredModal1 = (props) => {
    const { tempList } = useContext(KeywordContext);
    const { setList, ...rest } = props;

    const saveKeyword = () => {
        props.onHide();
        setList(tempList);
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
                <ChipsArray list={props.list} setList={props.setList} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveKeyword}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal1;