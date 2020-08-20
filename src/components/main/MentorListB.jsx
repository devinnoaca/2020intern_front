import React, { useState, useContext } from 'react';

import 'style/Main.css';
import MentorListContext from 'context/MentorListContext';
import MentorModal from 'components/main/MentorModal';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

const MentorListB = () => {
    const classes = useStyles();
    const [pickedMentor, setPickedMentor] = useState({

        usn: '',
        name: '',
        imageUrl: '',
        email: '',
        description: '',
        company: '',
        career: [],
    });
    const { mentorList } = useContext(MentorListContext);
    const [modalShow, setModalShow] = useState(false);
    const [sendForm, setSendForm] = useState(false);

    return (
        <>
            <Grid container spacing={4} className="mentorListBW">
                {mentorList.map((mentor) => {
                    return (
                        <Grid key={mentor.usn} item xs={12} sm={4} onClick={()=>{setModalShow(true);setPickedMentor(mentor);setSendForm(false);}}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={mentor.imageUrl}
                                        title="mentorImage" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {mentor.name} 멘토
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            {mentor.email}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            회사 : {mentor.company}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        자세히 보기
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <MentorModal
                pickedmentor={pickedMentor}
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop='static'
                setsendform={setSendForm}
                sendform={sendForm}
            />
        </>
    );
};

export default MentorListB;
