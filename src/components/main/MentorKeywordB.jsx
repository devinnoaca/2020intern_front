import React, { useState, useEffect } from 'react';

import Api from 'api/Api';

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

export default function MentorKeywordB(props) {
    const classes = useStyles();
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        const getMentorKeyword = async () => {
            await Api
                .getUserKeyword()
                .then((res) => {
                    console.log("멘토리스트 키워드 띄울꺼야",res.data);
                    setKeywordList(res.data.allKeyword)
                })
        }

        getMentorKeyword();
    }, [setKeywordList])

    return (
        <div className="mMentorKeywordB">
            <div>멘토 관련 키워드</div>
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
