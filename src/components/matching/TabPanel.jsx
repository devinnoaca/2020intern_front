import React, { useState, useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Matching.css';
import MyVerticallyCenteredModal from 'components/matching/MyVerticallyCenteredModal';
import UserContext from 'context/UserContext';

function TabPanel(props) {
    const { value, index, ...other } = props;
    const [tabValue, setTabValue] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [matchingList, setMatchingList] = useState([]);
    const [pickedMatchingList, setPickedMatchingList] = useState([]);
    const { userProfile } = useContext(UserContext);

    useEffect(() => {
        setTabValue(value);
    }, [value])

    useEffect(() => {
        const getWaitMatchingList = async () => {
            await Api
                .getMatchingList(userProfile.usn, userProfile.type, tabValue)
                .then((res) => {
                    if (res.data.matchingList !== undefined) {
                        setMatchingList(res.data.matchingList);
                    }
                })
        }

        getWaitMatchingList();

    }, [tabValue, userProfile.usn, userProfile.type]);

    // useEffect(() => {
    //     if (tabValue === 1) {
    //         const getAcceptMatchingList = async () => {
    //             await Api
    //                 .getMatchingList(userProfile.usn, userProfile.type, tabValue)
    //                 .then((res) => {
    //                     if (res.data.acceptMatchingList !== undefined) {
    //                         setMatchingList(res.data.acceptMatchingList);
    //                     }
    //                 })
    //         };

    //         getAcceptMatchingList();
    //     }
    // }, [tabValue]);

    // useEffect(() => {
    //     if (tabValue === 2) {
    //         const getRefuseMatchingList = async () => {
    //             await Api
    //                 .getMatchingList(userProfile.usn, userProfile.type, tabValue)
    //                 .then((res) => {
    //                     if (res.data.refuseMatchingList !== undefined) {
    //                         setMatchingList(res.data.refuseMatchingList);
    //                     }
    //                 })
    //         };

    //         getRefuseMatchingList();
    //     }
    // }, [tabValue]);

    return (
        <div
            role="tabpanel"
            hidden={tabValue !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {tabValue === index && (
                <>
                    {matchingList.map((matching) => {
                        return (
                            <div key={matching.matchingId}>
                                <div onClick={() => { setModalShow(true); setPickedMatchingList(matching) }} className="matchingList">
                                    <div>{matching.oppositeName} 멘토</div>
                                    <div>{matching.rejectMessage}</div>
                                    <div>요청 시간 : {matching.timeRes}</div>
                                </div>
                                <MyVerticallyCenteredModal
                                    value={tabValue}
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