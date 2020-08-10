import React, { useState } from 'react';

import 'style/Matching.css';
import TabPanel from 'components/matching/TabPanel';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="대기" {...a11yProps(0)} />
                    <Tab label="수락" {...a11yProps(1)} />
                    <Tab label="거절" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel state={
                {
                    matchingType: "처리되지 않은",
                    time: "요청"
                }
            } value={value} index={0} />
            <TabPanel state={
                {
                    matchingType: "수락",
                    time: "수락"
                }
            } value={value} index={1} />
            <TabPanel state={
                {
                    matchingType: "거절",
                    time: "거절"
                }
            } value={value} index={2} />
        </div>
    );
}
