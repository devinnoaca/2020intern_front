import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function MentorKeyword(props) {
    const classes = useStyles();
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        if(props.keywordList !== undefined) {
            setKeywordList(props.keywordList)
        }
    }, [props.keywordList])

    return (
        <Paper component="ul" className={classes.root}>
            {keywordList.map((data) => {

                return (
                    <li key={data.keywordName}>
                        <Chip
                            label={data.keywordName}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}
