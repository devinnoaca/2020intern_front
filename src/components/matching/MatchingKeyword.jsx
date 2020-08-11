import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

export default function MatchingKeyword(props) {
    const classes = useStyles();
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        if(props.keywordList !== undefined) {
            setKeywordList(props.keywordList)
        }
    }, [props.keywordList])

    return (
        <div className="mMentorKeywordB">
            <div>{props.useFor} 관련 키워드</div>
            <div className={classes.root}>
                {keywordList.map((data,index) => {

                    return (
                        <li key={index}>
                            <Chip
                                label={data.keywordName}
                                className={classes.chip}
                            />
                        </li>
                    );
                })}
            </div>
            
        </div>
    );
}
