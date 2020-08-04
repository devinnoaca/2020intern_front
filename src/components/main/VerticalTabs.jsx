import React, { useContext } from 'react';

import KeywordContext from 'context/KeywordContext'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const { keywordList, checkedKeywordList, setCheckedKeywordList } = useContext(KeywordContext);

    console.log('VertivalTapbs start');
    
    const handleClick = (keyword) => {
        return (() => {
            console.log("클릭은됬다");
            console.log("문제의부분",checkedKeywordList);
            
            setCheckedKeywordList([...checkedKeywordList,keyword]);
        });
    };

    const makeCategory = keywordList.map((category,index)=>{
        return (
            <Tab key={index} label={category.categoryName} {...a11yProps(index)} />
        );
    });

    const makeKeyword = keywordList.map((category, index) => {
        return (
            <TabPanel key={index} value={value} index={index}>
                {category.keywordList.map((keyword) => {
                    return (
                        <Chip key={keyword.keywordId} label={keyword.keywordName} onClick={handleClick(keyword)} style={{margin:2}}/>
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