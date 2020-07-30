import React, { useContext } from 'react';

import 'style/Main.css';
import KeywordContext from 'context/KeywordContext'

import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
}));

export default function LimitTags() {
    const classes = useStyles();
    const { checkedKeywordList } = useContext(KeywordContext);
    return (
        <div className={classes.root}>
            <Autocomplete
                multiple
                limitTags={2}
                // id="multiple-limit-tags"
                options={checkedKeywordList}
                getOptionLabel={(option) => option}
                // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="검색키워드" />
                )}
            />
        </div>
    );
}
