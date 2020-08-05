import React, { useEffect, useContext } from 'react';

import ChipsArray from "components/main/ChipsArray";
import KeywordContext from 'context/KeywordContext';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VerticalTabs from 'components/main/VerticalTabs';

const MyVerticallyCenteredModal1 = (props) => {
    const { setTempList } = useContext(KeywordContext);
    const { setList, ...rest } = props;

    useEffect(() => {
        setTempList(props.list)
    }, [props.list, setTempList]);

    return (
        <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered animation={false}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    키워드 수정
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalTabs list={props.list} setList={props.setList} />
                <ChipsArray list={props.list} setList={props.setList} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>저장</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal1;