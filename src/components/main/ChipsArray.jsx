import React, { useContext } from 'react';

import KeywordContext from 'context/KeywordContext'
import MentorListContext from 'context/MentorListContext';

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

const ChipsArray = () => {
    const classes = useStyles();
    const { tempList, setTempList, deleteKeywordList, setDeleteKeywordList } = useContext(KeywordContext);
    const { textRef } = useContext(MentorListContext);

    const handleDelete = (chipToDelete) => {
        return (() => {
            setDeleteKeywordList([...deleteKeywordList, chipToDelete.keywordId]);
            setTempList((chips) => chips.filter((chip) => chip !== chipToDelete));
        })
    };

    return (
        <Paper component="ul" className={classes.root}>
            {tempList.map((data) => {
                return (
                    <li key={data.keywordId}>
                        <Chip
                            label={data.keywordName}
                            onDelete={handleDelete(data)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
};

export default ChipsArray;