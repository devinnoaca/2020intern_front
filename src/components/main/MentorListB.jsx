import React, { useContext } from 'react';

import 'style/Main.css';
import MentorListContext from 'context/MentorListContext';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-bootstrap/Modal';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MentorListB = () => {
    const classes = useStyles();
    const { mentorList } = useContext(MentorListContext);
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
        <Grid container spacing={4} className="mentorListBW">
            {mentorList.map((mentor) => {
                return (
                    <Grid key={mentor.usn} item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardActionArea className="mentorCard">
                                <CardMedia
                                    className={classes.media}
                                    image=""
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
                                <Button size="small" color="primary" onClick={() => setModalShow(true)}>
                                    자세히 보기
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    );
};

export default MentorListB;
