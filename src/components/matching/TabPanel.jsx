import React, { useState, useEffect } from 'react';

import Api from 'api/Api';
import 'style/Matching.css';
import MyVerticallyCenteredModal from 'components/matching/MyVerticallyCenteredModal';

function TabPanel(props) {
    const { value, index, ...other } = props;
    const [modalShow, setModalShow] = useState(false);
    const [matchingList, setMatchingList] = useState([]);
    const [pickedMatchingList, setPickedMatchingList] = useState([]);

    useEffect(() => {
        if (value === 0) {
            const getWaitMatchingList = async () => {
                await Api
                    .getWaitMatchingList()
                    .then((res) => {
                        setMatchingList(res.data.waitMatchingList);
                    })
            };

            getWaitMatchingList();
        }
    }, [value]);

    useEffect(() => {
        if (value === 1) {
            const getAcceptMatchingList = async () => {
                await Api
                    .getAcceptMatchingList()
                    .then((res) => {
                        setMatchingList(res.data.acceptMatchingList);
                    })
            };

            getAcceptMatchingList();
        }
    }, [value]);

    useEffect(() => {
        if (value === 2) {
            const getRefuseMatchingList = async () => {
                await Api
                    .getRefuseMatchingList()
                    .then((res) => {
                        setMatchingList(res.data.refuseMatchingList);
                    })
            };

            getRefuseMatchingList();
        }
    }, [value]);

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                {matchingList.map((matching) => {
                    return (
                        <div key= { matching.matchingId }>
                            <div onClick={() => { setModalShow(true); setPickedMatchingList(matching)}} className="matchingList">
                            <div>{matching.mentor_USN} 멘토</div>
                            <div>{matching.req_reason}</div>
                            <div>요청 시간 : {matching.time_req}</div>
                        </div>
                        <MyVerticallyCenteredModal
                            value={value}
                            matchinglist={pickedMatchingList}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </div>
                    );
                })}
                </>
            )}
        </div>
    );
}

export default TabPanel;