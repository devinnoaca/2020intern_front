import React, { useContext, useState } from 'react';

import KeywordContext from 'context/KeywordContext';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 330,
        width: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const { keywordList, tempList, setTempList, addKeywordList, setAddKeywordList } = useContext(KeywordContext);

    const handleClick = (keyword) => {
        return (() => {
            if(!tempList.some(e => (e.keywordId === keyword.keywordId ))) {
                setAddKeywordList([...addKeywordList, keyword.keywordId])
                setTempList([...tempList, keyword]);
            } 
        });
    };

    const makeCategory = keywordList.map((category, index) => {
        return (
            <Tab key={index} label={category.categoryName} {...a11yProps(index)} />
        );
    });

    const makeKeyword = keywordList.map((category, index) => {   
        return (
            <TabPanel style={{width:'70%'}}key={index} value={value} index={index}>
                {category.keywordList.map((keyword) => {
                    return (
                        <Chip key={keyword.keywordId} label={keyword.keywordName} onClick={handleClick(keyword)} style={{ margin: 2 }} />
                    )
                })}
            </TabPanel>
        );
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {makeCategory}
            </Tabs>
            {makeKeyword}
        </div>
    );
}
