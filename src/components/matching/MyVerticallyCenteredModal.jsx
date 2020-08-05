import React, { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';

function MyVerticallyCenteredModal(props) {
    const [value, setValue] = useState();
    console.log("프롭스의 매칭리스트", props.matchinglist);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.matchinglist.matchingId}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>{props.matchinglist.matchingId}</h1>
                <h4>{value}</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
