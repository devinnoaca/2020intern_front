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
    },[value])

    useEffect(() => {
        if (tabValue === 0) {
            const getMatchingList = async () => {
                await Api
                    .getMatchingList(userProfile.usn,userProfile.type,tabValue)
                    .then((res) => {
                        console.log("데이터받아오냐", res.data);
                        setMatchingList(res.data.waitMatchingList);
                    })
            };

            getMatchingList();
        }
    }, [tabValue, userProfile.usn, userProfile.type]);

    // useEffect(() => {
    //     if (tabValue === 1) {
    //         const getAcceptMatchingList = async () => {
    //             await Api
    //                 .getAcceptMatchingList()
    //                 .then((res) => {
    //                     console.log("데이터받아오냐", res.data);
    //                     setMatchingList(res.data.acceptMatchingList);
    //                 })
    //         };

    //         getAcceptMatchingList();
    //     }
    // }, [tabValue]);

    // useEffect(() => {
    //     if (tabValue === 2) {
    //         const getRefuseMatchingList = async () => {
    //             await Api
    //                 .getRefuseMatchingList()
    //                 .then((res) => {
    //                     console.log("데이터받아오냐", res.data);
    //                     setMatchingList(res.data.refuseMatchingList);
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
                        <div key= { matching.matchingId }>
                            <div onClick={() => { setModalShow(true); setPickedMatchingList(matching)}} className="matchingList">
                            <div>{matching.mentor_USN} 멘토</div>
                            <div>{matching.req_reason}</div>
                            <div>요청 시간 : {matching.time_req}</div>
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