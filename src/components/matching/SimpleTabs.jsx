import React, { useState, useEffect } from 'react';

import Api from 'api/Api';
import 'style/Matching.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log("밸류가대체뭐냐?",value);
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
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

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [waitMatchingList, setWaitMatchingList] = useState([]);
    const [acceptMatchingList, setAcceptMatchingList] = useState([]);
    const [refuseMatchingList, setRefuseMatchingList] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const getWaitMatchingList = async () =>{
            await Api
                .getWaitMatchingList()
                .then((res) => {
                    console.log(res.data);
                    setWaitMatchingList(res.data.waitMatchingList);
                })
        }; 

        getWaitMatchingList();
    }, []);

    useEffect(() => {
        const getAcceptMatchingList = async () => {
            await Api
                .getAcceptMatchingList()
                .then((res) => {
                    console.log(res.data);
                    setAcceptMatchingList(res.data.acceptMatchingList);
                })
        };

        getAcceptMatchingList();
    }, []);

    useEffect(() => {
        const getRefuseMatchingList = async () => {
            await Api
                .getRefuseMatchingList()
                .then((res) => {
                    console.log(res.data);
                    setRefuseMatchingList(res.data.refuseMatchingList);
                })
        };

        getRefuseMatchingList();
    }, []);

    console.log(value);
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="대기" {...a11yProps(0)} />
                    <Tab label="수락" {...a11yProps(1)} />
                    <Tab label="거절" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {waitMatchingList.map((matching)=>{
                    return(
                        <div key={matching.matchingId} onClick={() => setModalShow(true)} className="matchingList">
                            <div>{matching.mentor_USN} 멘토</div>
                            <div>{matching.req_reason}</div>
                            <div>요청 시간 : {matching.time_req}</div>
                        </div>
                    )
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {acceptMatchingList.map((matching) => {
                    return (
                        <div key={matching.matchingId} onClick={() => setModalShow(true)} className="matchingList">
                            <div>{matching.mentor_USN} 멘토</div>
                            <div>{matching.req_reason}</div>
                            <div>수락 시간 : {matching.time_req}</div>
                        </div>
                    )
                })}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {refuseMatchingList.map((matching) => {
                    return (
                        <div key={matching.matchingId} onClick={() => setModalShow(true)} className="matchingList">
                            <div>{matching.mentor_USN} 멘토</div>
                            <div>{matching.req_reason}</div>
                            <div>거절 시간 : {matching.time_req}</div>
                        </div>
                    )
                })}
            </TabPanel>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}
