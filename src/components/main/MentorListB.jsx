import React, { useState, useContext, useEffect } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListContext from 'context/MentorListContext';
import image from 'style/logo192.png';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';
import MentorKeywordB from 'components/main/MentorKeywordB';

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
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

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
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {

        useEffect(() => {
            const getMentorKeyword = async () => {
                await Api
                    .getUserKeyword()
                    .then((res) => {
                        console.log("맨토디테일에서 멘토 키워드띄울꺼야", res.data);
                    })
            }
            getMentorKeyword()
        });

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        멘토링 신청 페이지
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Paper component="ul">
                    <div className="modalBodyWrap">
                        <div>멘토 상세 정보</div>
                        <div className="mentorB">
                            <div className="mentorBL">
                                <img src={image} alt="" />
                                <h3>{pickedMentor.name}</h3>
                                <h6>{pickedMentor.email}</h6>
                                <h6>{pickedMentor.company}</h6>
                            </div>
                            <div className="mentorBR">
                                <h4>멘토 소개 : </h4>
                                <p>{pickedMentor.description}</p>
                                <h4>경력 :</h4>
                                {pickedMentor.career.map((career) => {
                                    return (
                                        <p key={career}>{career}</p>
                                    )
                                })}
                            </div>
                        </div>
                        </div>
                        <MentorKeywordB usn={pickedMentor.usn}/>
                        </Paper>
                    <Paper component="ul">
                        멘토링 받고싶은 분야의 키워드를 선택하세요
                        <VerticalTabs />
                        멘토링받고 싶은 키워드(멘토에게 보여집니다)
                        <br/>
                        <ChipsArray />
                        <div className="mentorApply">
                            <TextField
                                id="outlined-multiline-static"
                                label="멘토링 받고 싶은 내용을 자유롭게 입력하세요"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{ width: '100%' }}
                            />
                            <Button variant="contained" className="applySubmit">신청하기</Button>
                        </div>
                        </Paper>

                   

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
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
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={image}
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
                                    <Button size="small" color="primary" onClick={() => {
                                        setModalShow(true);
                                        setPickedMentor(mentor);
                                        
                                    }} >
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
                backdrop='static'
            />
        </>
    );
};

export default MentorListB;
