import React, { useContext } from 'react';

import KeywordContext from 'context/KeywordContext';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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

export default function ChipsArray() {
    const classes = useStyles();
    const { checkedKeywordList, setCheckedKeywordList } = useContext(KeywordContext);

    let funStyle = 'color:blue';
    console.log('%cchipsArray start', funStyle);

    const handleDelete = (chipToDelete) => {
        return (() => {
            setCheckedKeywordList((chips) => chips.filter((chip) => chip !== chipToDelete));
            console.log(chipToDelete);
            console.log(checkedKeywordList);
        })
    };
    console.log(checkedKeywordList);
    

    return (
        <Paper component="ul" className={classes.root}>
            {checkedKeywordList.map((data) => {
                console.log(checkedKeywordList);
                return (
                    <li key={data}>
                        <Chip
                            label={data}
                            onDelete={handleDelete(data)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
            <IconButton aria-label="delete">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
