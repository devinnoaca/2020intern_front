import React from 'react';

import 'style/Main.css';
import MediaCard from 'components/MediaCard';

import Grid from '@material-ui/core/Grid';

const MentorListB = () => {
    const arr = ["1","2","3","4","5","6"];
    return (
        <Grid container spacing={4} className="mentorListBW">
        {arr.map((i)=>{
            return (
                <Grid key={i} item xs={12} sm={4}>
                    <MediaCard />
                </Grid>
            )
        })
        }
        </Grid>
    );
};

export default MentorListB;
